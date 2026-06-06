"use client";

import { useState, useEffect } from "react";
import { 
  Calendar, Clock, Users, Mail, User, Phone, CheckCircle, 
  Receipt, X, CreditCard, Lock, Shield, AlertCircle, QrCode, Award 
} from "lucide-react";
import { motion as m, AnimatePresence } from "framer-motion";

type ReservationStep = "details" | "payment" | "processing" | "success";

export default function Reservation() {
  const [step, setStep] = useState<ReservationStep>("details");
  
  // Details form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2"
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Payment form data
  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });
  const [paymentErrors, setPaymentErrors] = useState<{ [key: string]: string }>({});
  
  // Simulation controls
  const [simulateDecline, setSimulateDecline] = useState(false);
  const [paymentErrorMsg, setPaymentErrorMsg] = useState("");
  const [processingText, setProcessingText] = useState("Contacting merchant bank card processor...");
  const [resCode, setResCode] = useState("");
  const [transactionId, setTransactionId] = useState("");

  // Tab control in Success screen (Receipt vs VIP Email Template)
  const [activeSuccessTab, setActiveSuccessTab] = useState<"receipt" | "email">("receipt");

  // Format card number as xxxx xxxx xxxx xxxx
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    const matches = value.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      setPaymentData({ ...paymentData, cardNumber: parts.join(" ") });
    } else {
      setPaymentData({ ...paymentData, cardNumber: value });
    }
    
    if (paymentErrors.cardNumber) {
      setPaymentErrors({ ...paymentErrors, cardNumber: "" });
    }
  };

  // Format expiry as MM/YY
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 4) value = value.slice(0, 4);
    
    if (value.length >= 2) {
      setPaymentData({
        ...paymentData,
        cardExpiry: `${value.slice(0, 2)}/${value.slice(2, 4)}`
      });
    } else {
      setPaymentData({ ...paymentData, cardExpiry: value });
    }

    if (paymentErrors.cardExpiry) {
      setPaymentErrors({ ...paymentErrors, cardExpiry: "" });
    }
  };

  // Handle generic inputs
  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    if (paymentErrors[e.target.name]) {
      setPaymentErrors({ ...paymentErrors, [e.target.name]: "" });
    }
  };

  // Validate Details form
  const validateDetails = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Guest name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required.";
    } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.date) tempErrors.date = "Please select a booking date.";
    if (!formData.time) tempErrors.time = "Please select a dining hour.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Validate Payment form
  const validatePayment = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!paymentData.cardName.trim()) tempErrors.cardName = "Cardholder name is required.";
    
    const plainCardNumber = paymentData.cardNumber.replace(/\s/g, "");
    if (plainCardNumber.length !== 16) {
      tempErrors.cardNumber = "Please enter a valid 16-digit card number.";
    }
    
    if (paymentData.cardExpiry.length !== 5) {
      tempErrors.cardExpiry = "Expiry date must be in MM/YY format.";
    } else {
      const [month, year] = paymentData.cardExpiry.split("/").map(Number);
      if (month < 1 || month > 12) {
        tempErrors.cardExpiry = "Invalid expiry month.";
      }
    }
    
    if (paymentData.cardCvc.replace(/\D/g, "").length !== 3) {
      tempErrors.cardCvc = "Secure CVC code must be 3 digits.";
    }

    setPaymentErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Initiate Payment Step
  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateDetails()) {
      setStep("payment");
      setPaymentErrorMsg("");
    }
  };

  // Run payment processing animation timeline
  const handlePayAndSecure = (e: React.FormEvent) => {
    e.preventDefault();
    if (validatePayment()) {
      setStep("processing");
      setPaymentErrorMsg("");
      
      // Dynamic loading texts
      setTimeout(() => {
        setProcessingText("Securing table deposit and locks with escrow merchant...");
      }, 2000);

      setTimeout(() => {
        setProcessingText("Dispatching VIP Gold invitation email to guest inbox...");
      }, 4000);

      setTimeout(() => {
        if (simulateDecline) {
          // Fail Payment Route
          setStep("payment");
          setPaymentErrorMsg("Transaction Declined: Insufficient credit limit or authorization failure on secured deposit. Please try again or use another payment card.");
        } else {
          // Success Payment Route
          const code = `AUR-${Math.floor(10000 + Math.random() * 90000)}`;
          const txId = `TXN-${Math.floor(10000000 + Math.random() * 90000000)}`;
          setResCode(code);
          setTransactionId(txId);
          setStep("success");
          setActiveSuccessTab("receipt");
        }
      }, 6000);
    }
  };

  // Return to Details Step
  const handleCancelPayment = () => {
    setStep("details");
    setPaymentErrorMsg("");
  };

  // Reset reservation and start a new request
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "2"
    });
    setPaymentData({
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: ""
    });
    setErrors({});
    setPaymentErrors({});
    setStep("details");
  };

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-b border-gold-primary/5">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] gold-glow opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] gold-glow opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Booking Content & VIP benefits */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-gold-primary mb-3 font-semibold">
              BESPOKE RITUALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-wide text-foreground mb-6 leading-tight">
              Reserve A Dining <br />
              <span className="text-gold-gradient font-serif italic">Sanctuary</span>
            </h2>
            <div className="h-[1px] w-20 bg-gold-primary mb-8" />
            
            <p className="text-sm md:text-base text-foreground/70 tracking-wide leading-relaxed mb-6 font-sans">
              Due to exceptionally high dining demand and strict limited seating capacity, we advise submitting table reservations at least 48 hours in advance.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-xs md:text-sm text-foreground/80 font-sans tracking-wide">
                <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <span>Advanced booking fee is fully credited to your dining invoice at checkout.</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-foreground/80 font-sans tracking-wide">
                <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <span>Complimentary luxury greeting cocktail from our Head Sommelier.</span>
              </li>
              <li className="flex items-center gap-3 text-xs md:text-sm text-foreground/80 font-sans tracking-wide">
                <CheckCircle className="w-4 h-4 text-gold-primary flex-shrink-0" />
                <span>Exclusive dietary customization options via personal kitchen consultation.</span>
              </li>
            </ul>

            <div className="p-5 rounded-2xl border border-gold-primary/10 bg-gold-primary/5">
              <span className="text-[10px] uppercase tracking-widest text-gold-secondary font-bold block mb-1">
                VIP Private Bookings
              </span>
              <p className="text-xs text-foreground/60 leading-relaxed font-sans">
                For custom events, corporate bookings, or private mezzanines hosting above 10 guests, please contact our specialized event desk at <a href="mailto:events@aureliadining.com" className="text-gold-primary hover:text-gold-bright transition-colors font-medium">events@aureliadining.com</a>.
              </p>
            </div>
          </m.div>

          {/* Right Column: Interactive Step Card Container */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden min-h-[520px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                
                {/* STEP 1: FILL DETAILS */}
                {step === "details" && (
                  <m.div
                    key="step-details"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h3 className="font-serif text-2xl text-foreground font-semibold text-center mb-8">
                      Table Booking Form
                    </h3>

                    <form onSubmit={handleProceedToPayment} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-gold-primary" />
                            Guest Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleDetailsChange}
                            placeholder="e.g. John Doe"
                            className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-sans"
                          />
                          {errors.name && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{errors.name}</span>}
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-gold-primary" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleDetailsChange}
                            placeholder="e.g. johndoe@gmail.com"
                            className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-sans"
                          />
                          {errors.email && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-gold-primary" />
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleDetailsChange}
                            placeholder="e.g. +1 234 567 890"
                            className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-sans"
                          />
                          {errors.phone && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{errors.phone}</span>}
                        </div>

                        {/* Guests count */}
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-gold-primary" />
                            Number of Guests
                          </label>
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleDetailsChange}
                            className="bg-[#050505] text-foreground border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-sans cursor-pointer"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="7">7 Guests</option>
                            <option value="8">8 Guests</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Date Picker */}
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-gold-primary" />
                            Select Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleDetailsChange}
                            className="bg-[#050505] text-foreground border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-sans cursor-pointer"
                          />
                          {errors.date && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{errors.date}</span>}
                        </div>

                        {/* Time picker */}
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gold-primary" />
                            Dining Hours
                          </label>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleDetailsChange}
                            className="bg-[#050505] text-foreground border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 font-sans cursor-pointer"
                          >
                            <option value="">Choose Time</option>
                            <option value="17:00">5:00 PM (Appetizers Lounge)</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="19:00">7:00 PM (Premium Hour)</option>
                            <option value="20:00">8:00 PM (Premium Hour)</option>
                            <option value="21:00">9:00 PM</option>
                            <option value="22:00">10:00 PM (Late Dining)</option>
                          </select>
                          {errors.time && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{errors.time}</span>}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full relative group overflow-hidden py-4 rounded-xl bg-gradient-to-r from-gold-primary via-gold-bright to-gold-primary text-black font-bold uppercase tracking-widest text-xs shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
                      >
                        <span className="absolute inset-0 bg-white/20 transform -translate-x-full skew-x-12 transition-transform duration-1000 group-hover:translate-x-full" />
                        Confirm Table Request
                      </button>
                    </form>
                  </m.div>
                )}

                {/* STEP 2: PAYMENT SECURE PORTAL */}
                {step === "payment" && (
                  <m.div
                    key="step-payment"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col"
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <span className="text-xs uppercase tracking-widest text-gold-primary font-bold flex items-center justify-center gap-1.5 mb-2">
                        <Lock className="w-3.5 h-3.5 text-gold-primary animate-pulse" />
                        Secure Checkout Portal
                      </span>
                      <h3 className="font-serif text-2xl text-foreground font-semibold">
                        Gourmet Advanced Deposit
                      </h3>
                      <div className="h-[1px] w-20 bg-gold-primary/30 mx-auto my-3" />
                    </div>

                    {/* Booking Details Recap */}
                    <div className="p-4 rounded-xl bg-gold-primary/5 border border-gold-primary/10 mb-6 flex flex-wrap justify-between items-center text-xs tracking-wider font-sans">
                      <div className="flex flex-col gap-1">
                        <span className="text-foreground/45 uppercase text-[9px]">GUEST RESERVE DETAILS</span>
                        <span className="text-foreground font-medium">{formData.name} • {formData.guests} Guests</span>
                        <span className="text-foreground/60">{formData.date} at {formData.time} PM</span>
                      </div>
                      <div className="text-right flex flex-col gap-0.5 mt-2 sm:mt-0">
                        <span className="text-foreground/45 uppercase text-[9px]">SECURE BOOKING CHARGE</span>
                        <span className="text-xl text-gold-primary font-bold font-serif">$25.00</span>
                        <span className="text-[8px] text-foreground/40 font-light">credited to final dinner invoice</span>
                      </div>
                    </div>

                    {/* Decline Error Banner */}
                    {paymentErrorMsg && (
                      <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 rounded-xl border border-red-500/20 bg-red-950/20 text-red-200 text-xs leading-relaxed font-sans font-light mb-6 flex items-start gap-2"
                      >
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-red-300 block mb-0.5">Secure Transaction Failed</span>
                          {paymentErrorMsg}
                        </div>
                      </m.div>
                    )}

                    {/* Payment Inputs */}
                    <form onSubmit={handlePayAndSecure} className="space-y-5">
                      {/* Cardholder Name */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={paymentData.cardName}
                          onChange={handlePaymentChange}
                          placeholder="e.g. John Doe"
                          className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans"
                        />
                        {paymentErrors.cardName && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{paymentErrors.cardName}</span>}
                      </div>

                      {/* Card Number */}
                      <div className="flex flex-col">
                        <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center justify-between">
                          <span>Card Number</span>
                          <CreditCard className="w-3.5 h-3.5 text-foreground/40" />
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={handleCardNumberChange}
                          placeholder="xxxx xxxx xxxx xxxx"
                          className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans tracking-widest"
                        />
                        {paymentErrors.cardNumber && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{paymentErrors.cardNumber}</span>}
                      </div>

                      {/* Expiry & CVC Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="cardExpiry"
                            value={paymentData.cardExpiry}
                            onChange={handleExpiryChange}
                            placeholder="MM/YY"
                            className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans tracking-widest"
                          />
                          {paymentErrors.cardExpiry && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{paymentErrors.cardExpiry}</span>}
                        </div>

                        <div className="flex flex-col">
                          <label className="text-[10px] uppercase tracking-widest text-gold-secondary mb-2 font-bold flex items-center justify-between">
                            <span>Secure CVC</span>
                            <Shield className="w-3.5 h-3.5 text-foreground/40" />
                          </label>
                          <input
                            type="password"
                            name="cardCvc"
                            value={paymentData.cardCvc}
                            onChange={(e) => {
                              const val = e.target.value.replace(/\D/g, "").slice(0, 3);
                              setPaymentData({ ...paymentData, cardCvc: val });
                              if (paymentErrors.cardCvc) setPaymentErrors({ ...paymentErrors, cardCvc: "" });
                            }}
                            placeholder="•••"
                            className="bg-[#050505] text-foreground placeholder-foreground/30 border border-gold-primary/10 focus:border-gold-primary rounded-xl px-4 py-3 text-xs focus:outline-none transition-all duration-300 font-sans tracking-widest"
                          />
                          {paymentErrors.cardCvc && <span className="text-[10px] text-red-400 mt-1 font-sans font-light">{paymentErrors.cardCvc}</span>}
                        </div>
                      </div>

                      {/* Simulation decline control */}
                      <div className="flex items-center gap-3 p-3 rounded-xl border border-gold-primary/10 bg-gold-primary/5 select-none my-4">
                        <input
                          type="checkbox"
                          id="decline-toggle"
                          checked={simulateDecline}
                          onChange={(e) => setSimulateDecline(e.target.checked)}
                          className="w-4 h-4 accent-gold-primary cursor-pointer"
                        />
                        <label htmlFor="decline-toggle" className="text-[10px] uppercase tracking-widest text-gold-secondary font-bold cursor-pointer">
                          Simulate Payment Decline (Failed State)
                        </label>
                      </div>

                      {/* Pay & Cancel Buttons */}
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleCancelPayment}
                          className="w-1/3 py-4 rounded-xl border border-gold-primary/30 text-gold-secondary font-semibold uppercase tracking-widest text-xs hover:bg-gold-primary/5 transition-all cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-2/3 py-4 rounded-xl bg-gradient-to-r from-gold-primary to-gold-bright text-black font-extrabold uppercase tracking-widest text-xs shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] cursor-pointer"
                        >
                          Pay $25.00 & Lock Table
                        </button>
                      </div>
                    </form>
                  </m.div>
                )}

                {/* STEP 3: PAYMENT PROCESSING GATEWAY */}
                {step === "processing" && (
                  <m.div
                    key="step-processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    {/* Golden Spinner */}
                    <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full border-4 border-gold-primary/10 border-t-gold-primary animate-spin" />
                      <Lock className="w-6 h-6 text-gold-primary animate-pulse" />
                    </div>

                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold-primary font-bold mb-3 block">
                      SECURE TRANSACTION PROTOCOL
                    </span>
                    
                    <h3 className="font-serif text-xl sm:text-2xl text-foreground font-semibold mb-4 animate-pulse">
                      Authorizing Checkout...
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-foreground/50 tracking-wider font-sans max-w-sm leading-relaxed">
                      {processingText}
                    </p>
                  </m.div>
                )}

                {/* STEP 4: SUCCESS RECEIPT + EMAIL INVITE PREVIEW */}
                {step === "success" && (
                  <m.div
                    key="step-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col"
                  >
                    {/* Header Icon */}
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-gold-primary" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-gold-primary font-bold block mb-1">
                        TRANSACTION APPROVED • RESERVATION COMPLETED
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-semibold">
                        Successfully Booked!
                      </h3>
                      <div className="h-[1px] w-20 bg-gold-primary/30 mx-auto my-3" />
                    </div>

                    {/* Success navigation tabs (Details Receipt vs VIP email template preview) */}
                    <div className="flex border-b border-gold-primary/15 mb-6 text-xs font-sans tracking-widest select-none">
                      <button
                        onClick={() => setActiveSuccessTab("receipt")}
                        className={`flex-1 py-3 text-center uppercase font-bold transition-all border-b-2 cursor-pointer ${
                          activeSuccessTab === "receipt"
                            ? "text-gold-primary border-gold-primary"
                            : "text-foreground/45 border-transparent hover:text-foreground/80"
                        }`}
                      >
                        Voucher Receipt
                      </button>
                      <button
                        onClick={() => setActiveSuccessTab("email")}
                        className={`flex-1 py-3 text-center uppercase font-bold transition-all border-b-2 cursor-pointer ${
                          activeSuccessTab === "email"
                            ? "text-gold-primary border-gold-primary"
                            : "text-foreground/45 border-transparent hover:text-foreground/80"
                        }`}
                      >
                        VIP Invite Email
                      </button>
                    </div>

                    <AnimatePresence mode="wait">
                      {/* VIEW 1: VOUCHER RECEIPT */}
                      {activeSuccessTab === "receipt" && (
                        <m.div
                          key="tab-receipt"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4 font-sans text-xs tracking-wider"
                        >
                          <div className="flex justify-between items-center border-b border-gold-primary/5 pb-2.5">
                            <span className="text-foreground/40">Dining Reservation Code:</span>
                            <span className="font-mono text-gold-bright font-bold text-sm">{resCode}</span>
                          </div>
                          
                          <div className="flex justify-between items-center border-b border-gold-primary/5 pb-2.5">
                            <span className="text-foreground/40">Cardholder Name:</span>
                            <span className="text-foreground font-medium">{formData.name}</span>
                          </div>

                          <div className="flex justify-between items-center border-b border-gold-primary/5 pb-2.5">
                            <span className="text-foreground/40">Secure Transaction ID:</span>
                            <span className="font-mono text-foreground/70">{transactionId}</span>
                          </div>

                          <div className="flex justify-between items-center border-b border-gold-primary/5 pb-2.5">
                            <span className="text-foreground/40">Party Size & Arrival:</span>
                            <span className="text-foreground font-medium">{formData.guests} Guests • {formData.date} at {formData.time} PM</span>
                          </div>

                          <div className="flex justify-between items-center border-b border-gold-primary/5 pb-2.5">
                            <span className="text-foreground/40">Advanced Secure Fee:</span>
                            <span className="text-gold-primary font-serif font-bold text-sm">$25.00 PAID</span>
                          </div>

                          <div className="p-4 rounded-xl border border-gold-primary/10 bg-gold-primary/5 mt-4 text-center">
                            <p className="text-[10px] text-gold-secondary leading-relaxed font-sans font-light">
                              The reservation is locked. The $25.00 advanced fee is fully secured in escrow. An invitation email was dispatched to **{formData.email}**. Kindly review the VIP Invite tab to preview your gold invitation template.
                            </p>
                          </div>

                          <button
                            onClick={resetForm}
                            className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-primary to-gold-bright text-black text-xs uppercase tracking-widest font-extrabold shadow-lg cursor-pointer"
                          >
                            Reserve Another Table
                          </button>
                        </m.div>
                      )}

                      {/* VIEW 2: VIP EMAIL INVITATION TEMPLATE PREVIEW */}
                      {activeSuccessTab === "email" && (
                        <m.div
                          key="tab-email"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="border border-gold-primary/20 rounded-2xl bg-[#08090c] p-6 max-h-[380px] overflow-y-auto font-sans relative"
                        >
                          {/* Simulated Email Client Top Metadata Bar */}
                          <div className="border-b border-gold-primary/10 pb-3 mb-5 text-[10px] text-foreground/45 flex flex-col gap-1.5 tracking-wide">
                            <div><span className="font-bold text-gold-secondary uppercase">From:</span> concierge@aureliadining.com</div>
                            <div><span className="font-bold text-gold-secondary uppercase">To:</span> {formData.email}</div>
                            <div><span className="font-bold text-gold-secondary uppercase">Subject:</span> Secure Booking Voucher Invitation: {resCode}</div>
                          </div>

                          {/* Email Content Body */}
                          <div className="text-center mb-6">
                            {/* Gold crest logo */}
                            <div className="w-10 h-10 rounded-full border border-gold-primary/20 bg-gold-primary/5 flex items-center justify-center mx-auto mb-3">
                              <Award className="w-5 h-5 text-gold-primary" />
                            </div>
                            <span className="font-serif tracking-[0.25em] text-md font-semibold text-gold-primary block">
                              AURELIA
                            </span>
                            <span className="text-[8px] tracking-[0.3em] uppercase text-gold-secondary block mt-0.5">
                              Haute Gastronomie
                            </span>
                          </div>

                          <p className="text-xs text-foreground/80 leading-relaxed mb-4 font-light">
                            Dear <strong className="text-gold-bright">{formData.name}</strong>,
                          </p>
                          
                          <p className="text-xs text-foreground/75 leading-relaxed mb-5 font-light">
                            We are delighted to inform you that your secure table reservation request has been officially approved. Our culinary artisans have locked in your dining slot, and Chef Alexandre Dubois has begun custom-preparing your gastronomic ritual.
                          </p>

                          {/* Detail Grid in Email */}
                          <div className="p-4 rounded-xl border border-gold-primary/15 bg-black/60 mb-5 space-y-3 text-[11px] tracking-wide relative">
                            {/* Floating secure watermark */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                              <QrCode className="w-16 h-16 text-gold-primary" />
                            </div>

                            <div className="flex justify-between">
                              <span className="text-foreground/40 uppercase text-[9px]">Invitation Voucher Code:</span>
                              <span className="font-mono text-gold-primary font-bold">{resCode}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-foreground/40 uppercase text-[9px]">Party Parameters:</span>
                              <span className="text-foreground font-medium">{formData.guests} Guests</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-foreground/40 uppercase text-[9px]">Arrival Schedule:</span>
                              <span className="text-foreground font-medium">{formData.date} at {formData.time} PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-foreground/40 uppercase text-[9px]">Sommelier host allocation:</span>
                              <span className="text-gold-secondary font-medium">VIP Gold Vault Assigned</span>
                            </div>
                          </div>

                          {/* Invoice section inside email template */}
                          <div className="border-t border-dashed border-gold-primary/20 pt-4 mb-5">
                            <span className="text-[9px] uppercase tracking-widest text-gold-secondary font-bold block mb-2">
                              Escrow Advanced Invoice
                            </span>
                            
                            <div className="space-y-1.5 text-[10px] text-foreground/60 tracking-wider">
                              <div className="flex justify-between">
                                <span>Advanced Reservation Charge:</span>
                                <span>$25.00</span>
                              </div>
                              <div className="flex justify-between text-gold-bright font-bold">
                                <span>Total Paid (Auth Secured):</span>
                                <span>$25.00</span>
                              </div>
                              <div className="flex justify-between text-[8px] text-foreground/40">
                                <span>Transaction Token ID:</span>
                                <span>{transactionId} (Visa Secure)</span>
                              </div>
                            </div>
                          </div>

                          {/* Fine Policies inside email */}
                          <div className="border-t border-gold-primary/10 pt-4 text-[10px] text-foreground/45 leading-relaxed font-sans font-light space-y-2">
                            <span className="text-[8px] uppercase tracking-widest text-gold-secondary font-bold block">
                              Aurelia Etiquette & Policies
                            </span>
                            <p>
                              • **Dress Code Guidelines**: Aurelia maintains a strict Smart-Elegant dress code pairing. Tailored jackets are highly recommended for gentlemen. Sportswear, baseball caps, and open-toed sandals are strictly prohibited in the primary dining chambers.
                            </p>
                            <p>
                              • **Cancellations**: Cancellations or timing shifts must be submitted at least 24 hours prior to your reservation. Your $25.00 fee is credited to your final table check.
                            </p>
                          </div>

                          <div className="border-t border-gold-primary/10 pt-4 mt-4 text-center text-[9px] text-gold-secondary tracking-widest">
                            742 AURELIA BOULEVARD, MANHATTAN, NY
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </m.div>
                )}

              </AnimatePresence>

            </div>
          </m.div>

        </div>
      </div>
    </section>
  );
}
