import React from 'react';

const FrequentAsk = () => {
    return (
        <div className='mt-5 container mx-auto'>
            <div className="main mb-3">
                <h4 className="title">Frequently Asked Question</h4>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Can I Buy Camera in Installement?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                            Yes, We Have Installment System. We Accept All Card Payment Also. Contact Us For More Information and Installement Policy.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is The Procesure of Buying In Online?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                            Choose Your Camera, Then Click on Buy Button and Fill Up the Order form. Within 2/3 Working Days You Will Get Your Favourite Camerea In Your Hand.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Is There Any Discount or Promotion Offer Going On?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Yes, We Gift Camera Bag, Memory Card and Lens Hood To All Our Customers. Also, We Arrange Different Promotion Offer For Our Customers. Subscribe Us to Get The Promotion Alert on Your Mail.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What Are the Warranty Policies?
                    </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <p>
                             We Provide 10 days Full Return Warranty, 2 Years Parts Warrany and 10 Years Service Warranty for All The Customers. 
                        </p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrequentAsk;