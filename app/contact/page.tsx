import React from 'react'

const ContactCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {/* Compact Card */}
      <div className="w-full max-w-sm bg-[#0d0d0d] border border-gray-800 rounded-lg p-6 shadow-2xl">
        
        {/* Header*/}
        <div className="mb-6">
          <h1 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">
            Get <span className="text-blue-600">Fitted</span>
          </h1>
          <div className="h-1 w-8 bg-blue-600 mt-2"></div>
        </div>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Name</label>
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
            <input 
              type="email" 
              placeholder="example@gmail.com"
              className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message</label>
            <textarea 
              rows={3} 
              placeholder="Type your message..."
              className="w-full bg-[#161616] border border-gray-800 text-white text-sm px-3 py-2 rounded focus:outline-none focus:border-blue-600 transition-colors placeholder:text-gray-800 resize-none"
            ></textarea>
          </div>

          {/* Action Button*/}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase py-3 rounded transition-all active:scale-[0.97] tracking-widest"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactCard