document.addEventListener('DOMContentLoaded', function () {
    let testimonialIndex = 0;
    const testimonials = [
        {
            text: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
            author: "Diksha Pande",
            position: "Co-founder, Samosa Party",
            image: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
            logo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg",
            stats: [
                { value: "upto 95%", text: "Demand Fulfilment" },
                { value: "< 3%", text: "Daily Stock-out" }
            ]
        },
        {
            text: "CleverBooks has revolutionized our inventory management. We can now predict demand spikes and ensure our customers are never disappointed. The team's expertise in supply chain management is evident in every aspect of the product.",
            author: "Alex Smith",
            position: "CEO, FreshFoods",
            image: "https://via.placeholder.com/80",
            logo: "https://via.placeholder.com/150",
            stats: [
                { value: "upto 98%", text: "Order Accuracy" },
                { value: "< 2%", text: "Stock-out Rate" }
            ]
        }
    ];

    function updateTestimonial() {
        const testimonial = testimonials[testimonialIndex];
        document.querySelector('.testimonial-text').textContent = testimonial.text;
        document.querySelector('.testimonial-author h3').textContent = testimonial.author;
        document.querySelector('.testimonial-author p').textContent = testimonial.position;
        document.querySelector('.testimonial-author img').src = testimonial.image;
        document.querySelector('.testimonial-image img').src = testimonial.logo;
        const statElements = document.querySelectorAll('.testimonial-stats .stat');
        statElements.forEach((statElement, index) => {
            statElement.querySelector('h3').textContent = testimonial.stats[index].value;
            statElement.querySelector('p').textContent = testimonial.stats[index].text;
        });
    }

    document.getElementById('prevBtn').addEventListener('click', function () {
        testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    document.getElementById('nextBtn').addEventListener('click', function () {
        testimonialIndex = (testimonialIndex + 1) % testimonials.length;
        updateTestimonial();
    });

    updateTestimonial();
});


    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
