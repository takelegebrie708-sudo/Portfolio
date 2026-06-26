/* Scroll Animation */
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll('.hidden').forEach(el=>{
    observer.observe(el);
});

/* Interactive Skill Cards */
document.querySelectorAll('.skill-card').forEach(card=>{
    card.addEventListener('mousemove',e=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(124,58,237,.35),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener('mouseleave',()=>{
        card.style.background='rgba(255,255,255,.08)';
    });
});
