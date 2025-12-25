const counters = document.querySelectorAll('.counter');
const speed = 100;

const startCounting = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const updateCount = () => {
                const inc = target / speed;
                if (count < target) {
                    count += inc;
                    counter.innerText = Math.ceil(count).toLocaleString();
                    setTimeout(updateCount, 15);
                } else {
                    if (target === 98) {
                        counter.innerText = target + "%";
                    } else {
                        counter.innerText = target.toLocaleString() + " +";
                    }
                }
            };

            updateCount();
            observer.unobserve(counter);
        }
    });
};

const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });
counters.forEach(counter => observer.observe(counter));