import React from 'react';

function FAQ() {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              What is Yoga?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yoga is a physical, mental, and spiritual practice that originated in India. It involves physical postures, breath control, and meditation.
            </div>
          </div>
        </div>
        {/* Add more FAQ items here */}
      </div>
    </div>
  );
}

export default FAQ;