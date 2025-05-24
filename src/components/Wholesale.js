import React from 'react'
import BulkOrderBanner from './BulkOrderBanner'
import FAQSection from './FAQSection'
import Form from './Form'
import Bento from './Bento'

function Wholesale() {
  return (
    <div>
         <BulkOrderBanner />
         <div className="text-center my-12">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Bulk Ordering – Customized Solutions
          </h2>
          <p className="text-neutral-600 text-lg">
            High-quality food products tailored to your needs. Request a quote today!
          </p>
        </div>
        {/* <Form /> */}
        <Bento />
         <FAQSection />  
    </div>
  )
}

export default Wholesale
