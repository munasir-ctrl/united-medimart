'use client';

import React, { useState } from 'react';
import { 
  X, 
  QrCode, 
  Send, 
  Upload, 
  CheckCircle2, 
  Copy, 
  ShieldCheck, 
  MessageSquareText, 
  CreditCard 
} from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems?: CartItem[];
  upiId?: string; // e.g. "unitedmedimart@okaxis"
  whatsappNumber?: string; // e.g. "919876543210"
}

export function CheckoutModal({
  isOpen,
  onClose,
  cartItems = [
    { id: '1', name: 'Derma Moisturizing Lotion 200ml', price: 450, quantity: 1 },
    { id: '2', name: 'Vitamin C Serum 30ml', price: 699, quantity: 1 },
  ],
  upiId = 'unitedmedimart@okaxis',
  whatsappNumber = '919876543210',
}: CheckoutModalProps) {
  const [activeTab, setActiveTab] = useState<'upi' | 'whatsapp'>('upi');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [copied, setCopied] = useState(false);
  const [prescriptionNote, setPrescriptionNote] = useState('');
  const [transactionRef, setTransactionRef] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Dynamic UPI Deep Link Format (Opens GPay, PhonePe, Paytm natively)
  const upiPayUrl = `upi://pay?pa=${upiId}&pn=United%20Medimart&am=${totalAmount}&cu=INR&tn=Order%20Payment`;

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleUpiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp confirmation string for UPI order
    const itemsList = cartItems
      .map((item) => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join('%0A');

    const message = `*NEW UPI ORDER - UNITED MEDIMART*%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${customerName}%0A` +
      `Phone: ${customerPhone}%0A` +
      `Transaction Ref/UTR: ${transactionRef || 'Pending verification'}%0A%0A` +
      `*Order Items:*%0A${itemsList}%0A%0A` +
      `*Total Paid:* ₹${totalAmount}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  const handlePrescriptionWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*PRESCRIPTION & MEDICINE INQUIRY - UNITED MEDIMART*%0A%0A` +
      `*Customer Name:* ${customerName}%0A` +
      `*Customer Phone:* ${customerPhone}%0A` +
      `*Note / Medicine Details:* ${prescriptionNote || 'Attaching prescription image in chat'}%0A%0A` +
      `_Please verify medicine availability and delivery details for Perumbavoor area._`;

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50/50">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">United Medimart Checkout</h2>
            <p className="text-xs text-slate-500">Perumbavoor, Kerala • Fast Direct Delivery</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 transition-all"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Order Initiated!</h3>
            <p className="mt-2 text-sm text-slate-600">
              We opened WhatsApp to send your details directly to our pharmacist counter in Perumbavoor. 
              Our team will confirm your order shortly.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-6 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-all"
            >
              Back to Store
            </button>
          </div>
        ) : (
          <div className="p-6">
            {/* Tabs Toggle */}
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5 mb-6">
              <button
                type="button"
                onClick={() => setActiveTab('upi')}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${
                  activeTab === 'upi'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="h-4 w-4 text-emerald-600" />
                Buy Cosmetics & Items (UPI)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('whatsapp')}
                className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold transition-all ${
                  activeTab === 'whatsapp'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Upload className="h-4 w-4 text-emerald-600" />
                Upload Prescription
              </button>
            </div>

            {/* TAB 1: UPI DIRECT CHECKOUT */}
            {activeTab === 'upi' && (
              <form onSubmit={handleUpiSubmit} className="space-y-4">
                {/* Order Summary Pill */}
                <div className="flex items-center justify-between rounded-2xl bg-emerald-50/60 p-4 border border-emerald-100">
                  <div>
                    <p className="text-xs font-semibold text-emerald-800 uppercase tracking-wide">Total Payable</p>
                    <p className="text-2xl font-black text-emerald-700">₹{totalAmount}</p>
                  </div>
                  <a
                    href={upiPayUrl}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                  >
                    <QrCode className="h-4 w-4" />
                    Open App to Pay
                  </a>
                </div>

                {/* QR Code & VPA Display */}
                <div className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-200/80 p-4 bg-slate-50/30">
                  <div className="flex flex-col items-center justify-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                    {/* Standard dynamic Google Pay / PhonePe UPI QR format */}
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(upiPayUrl)}`}
                      alt="UPI Payment QR Code"
                      className="h-28 w-28 object-contain"
                    />
                    <span className="mt-1 text-[10px] font-bold text-slate-400">SCAN WITH ANY UPI APP</span>
                  </div>
                  
                  <div className="flex-1 w-full space-y-2">
                    <p className="text-xs font-semibold text-slate-500">Or copy store UPI ID:</p>
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                      <code className="text-xs font-bold text-slate-800">{upiId}</code>
                      <button
                        type="button"
                        onClick={copyUpiId}
                        className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80"
                      >
                        <Copy className="h-3.5 w-3.5" />
                        {copied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      Supports Google Pay, PhonePe, Paytm, BHIM, and Kerala Gramin Bank UPI apps.
                    </p>
                  </div>
                </div>

                {/* Customer Info Form Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">UPI Transaction Ref / UTR (Optional)</label>
                  <input
                    type="text"
                    placeholder="Enter 12-digit UTR number after payment"
                    value={transactionRef}
                    onChange={(e) => setTransactionRef(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
                >
                  <Send className="h-4 w-4" />
                  Confirm & Send Payment Receipt on WhatsApp
                </button>
              </form>
            )}

            {/* TAB 2: WHATSAPP PRESCRIPTION ORDER */}
            {activeTab === 'whatsapp' && (
              <form onSubmit={handlePrescriptionWhatsApp} className="space-y-4">
                <div className="rounded-2xl bg-blue-50/70 p-4 border border-blue-100 flex items-start gap-3">
                  <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">Fast Pharmacist Verification</h4>
                    <p className="text-xs text-blue-700 mt-0.5">
                      Send doctor prescription slip directly to our licensed pharmacists in Perumbavoor to check stock, pricing & dosage.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anjali Verma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Medicine Names or Special Instructions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Type required medicines or note (e.g. 'Need 2 strips of Paracetamol 650mg & Glucose meter')..."
                    value={prescriptionNote}
                    onChange={(e) => setPrescriptionNote(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-500 transition-all"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Connect with Pharmacist on WhatsApp
                </button>
              </form>
            )}
          </div>
        )}

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
          <span>🔒 100% Genuine Medical Supplies</span>
          <span>📍 Perumbavoor, Ernakulam District</span>
        </div>
      </div>
    </div>
  );
}