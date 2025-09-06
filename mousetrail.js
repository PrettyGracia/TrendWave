// mousetrail.js - Glowing neon streak trail effect for all pages

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const points = [];
    const maxPoints = 20; // Number of points in the trail
    const trailLength = 100; // Length of the trail in pixels

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Store mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Handle mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        points.push({ x: mouseX, y: mouseY, time: Date.now() });
        if (points.length > maxPoints) {
            points.shift();
        }
    });

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw glowing streak
        if (points.length > 1) {
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)'; // Neon cyan base
            ctx.lineWidth = 4;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            // Create gradient along the trail
            const gradient = ctx.createLinearGradient(points[0].x, points[0].y, mouseX, mouseY);
            gradient.addColorStop(0, 'rgba(0, 255, 255, 0)'); // Fade out at tail
            gradient.addColorStop(1, 'rgba(128, 0, 255, 0.8)'); // Neon purple at head
            ctx.strokeStyle = gradient;

            // Draw smooth curve through points
            ctx.moveTo(points[0].x, points[0].y);
            for (let i = 1; i < points.length; i++) {
                const xc = (points[i - 1].x + points[i].x) / 2;
                const yc = (points[i - 1].y + points[i].y) / 2;
                ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
            }
            ctx.stroke();

            // Add glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset to avoid affecting other drawings
        }

        // Remove old points to create fading effect
        const now = Date.now();
        while (points.length > 0 && now - points[0].time > 500) {
            points.shift(); // Remove points older than 500ms
        }

        requestAnimationFrame(animate);
    }
    animate();
});