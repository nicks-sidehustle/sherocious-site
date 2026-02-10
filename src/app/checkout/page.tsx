'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

type CheckoutStep = 'info' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>('info');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  if (items.length === 0 && !orderPlaced) {
    router.push('/cart');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // Generate order ID
    const newOrderId = `SHR-${Date.now().toString(36).toUpperCase()}`;
    setOrderId(newOrderId);
    setOrderPlaced(true);
    setStep('confirmation');
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Success Message */}
          <div className="bg-white rounded-lg p-8 shadow-sm border text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 mb-4">Thank you for your order, {formData.firstName}!</p>
            <p className="text-lg font-mono bg-gray-100 inline-block px-4 py-2 rounded">
              Order #{orderId}
            </p>
          </div>

          {/* Fulfillment Flow */}
          <div className="bg-white rounded-lg p-6 shadow-sm border mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Fulfillment Flow</h2>
            
            <div className="relative">
              {/* Flow Diagram */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <span className="text-sm mt-2 text-center font-medium">Order<br/>Received</span>
                </div>
                <div className="flex-1 h-1 bg-[#c9a227] mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#c9a227] rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <span className="text-sm mt-2 text-center font-medium">Sent to<br/>Amazon MCF</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">3</div>
                  <span className="text-sm mt-2 text-center text-gray-500">Picked &<br/>Packed</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">4</div>
                  <span className="text-sm mt-2 text-center text-gray-500">Shipped</span>
                </div>
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">5</div>
                  <span className="text-sm mt-2 text-center text-gray-500">Delivered</span>
                </div>
              </div>

              {/* Status Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">Shopify</h3>
                  <p className="text-sm text-blue-700">Order captured, customer data saved, email sent</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-900 mb-2">Amazon MCF</h3>
                  <p className="text-sm text-orange-700">Fulfillment request sent to FBA warehouse</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-900 mb-2">Customer</h3>
                  <p className="text-sm text-green-700">Tracking email incoming, Prime-speed delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-[#1a1a2e] text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">What Happens Behind the Scenes</h2>
            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-bold">1.</span>
                <span>Order saved to Shopify database (you own this customer forever)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-bold">2.</span>
                <span>API call to Amazon MCF creates fulfillment order</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-bold">3.</span>
                <span>Amazon warehouse picks, packs, and ships (same as FBA)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-bold">4.</span>
                <span>Customer gets tracking, you get the margin (no 15% Amazon fee!)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9a227] font-bold">5.</span>
                <span>Klaviyo sends post-purchase email sequence automatically</span>
              </li>
            </ol>
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-8">
            <a
              href="/shop"
              className="inline-block bg-[#c9a227] text-[#1a1a2e] px-8 py-3 rounded font-bold hover:bg-[#e8d48a] transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="flex items-center mb-8">
              {['info', 'shipping', 'payment'].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step === s
                        ? 'bg-[#c9a227] text-[#1a1a2e]'
                        : i < ['info', 'shipping', 'payment'].indexOf(step)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < 2 && <div className="w-16 h-1 bg-gray-200 mx-2"></div>}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border">
              {step === 'info' && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                      />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={() => setStep('shipping')}
                    className="mt-6 w-full bg-[#c9a227] text-[#1a1a2e] py-3 rounded font-bold hover:bg-[#e8d48a] transition-colors"
                  >
                    Continue to Shipping
                  </button>
                </>
              )}

              {step === 'shipping' && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
                  <div className="space-y-4">
                    <input
                      type="text"
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                      />
                      <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      name="zip"
                      placeholder="ZIP code"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                    />
                  </div>

                  {/* Fulfillment Info */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-blue-900">Fulfilled by Amazon MCF</p>
                        <p className="text-sm text-blue-700">Fast, reliable Prime-speed shipping</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setStep('info')}
                      className="flex-1 border border-gray-300 py-3 rounded font-bold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setStep('payment')}
                      className="flex-1 bg-[#c9a227] text-[#1a1a2e] py-3 rounded font-bold hover:bg-[#e8d48a] transition-colors"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </>
              )}

              {step === 'payment' && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Payment</h2>
                  
                  {/* Demo Payment Options */}
                  <div className="space-y-3 mb-6">
                    <div className="border-2 border-[#c9a227] rounded-lg p-4 bg-[#c9a227]/5">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="payment" defaultChecked className="w-4 h-4" />
                        <span className="font-medium">Credit Card</span>
                        <span className="ml-auto text-sm text-gray-500">Visa, MC, Amex</span>
                      </label>
                    </div>
                    <div className="border rounded-lg p-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="payment" className="w-4 h-4" />
                        <span className="font-medium">Shop Pay</span>
                        <span className="ml-auto text-sm text-gray-500">Express checkout</span>
                      </label>
                    </div>
                    <div className="border rounded-lg p-4">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="payment" className="w-4 h-4" />
                        <span className="font-medium">PayPal</span>
                      </label>
                    </div>
                  </div>

                  {/* Demo Card Input */}
                  <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="text"
                      placeholder="Card number"
                      defaultValue="4242 4242 4242 4242"
                      className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        defaultValue="12/28"
                        className="px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        defaultValue="123"
                        className="px-4 py-3 border rounded focus:ring-2 focus:ring-[#c9a227] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button
                      onClick={() => setStep('shipping')}
                      className="flex-1 border border-gray-300 py-3 rounded font-bold hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="flex-1 bg-[#c9a227] text-[#1a1a2e] py-3 rounded font-bold hover:bg-[#e8d48a] transition-colors"
                    >
                      Place Order - ${totalPrice.toFixed(2)}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm border sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-500 text-white text-xs rounded-full flex items-center justify-center">
                        {quantity}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 line-clamp-1">{product.name}</p>
                      <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>5% to Mental Health</span>
                  <span className="text-[#c9a227]">${(totalPrice * 0.05).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
