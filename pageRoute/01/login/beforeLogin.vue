<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const t = useI18n().t;
const router = useRouter();

const changePage = (path) => {
};

const canvasRef = ref(null);

onMounted(() => {
    // --- 新增: Canvas 神经网络动画逻辑 ---
    const canvas = canvasRef.value;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 70; // 粒子数量，可根据性能调整
    const connectionDistance = 120; // 粒子连接距离

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5; // 速度
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5 + 1; // 粒子半径
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#A06EFF'; // 粒子颜色
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    // 线的透明度根据距离变化
                    ctx.strokeStyle = `rgba(160, 110, 255, ${1 - distance / connectionDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

   
});

</script>

<template>
    <div class='landing-page'>
        <!-- 科技背景层 (已应用新的紫色主题) -->
        <div class="tech-background">
            <!-- 新增: 动态神经网络背景 -->
            <canvas ref="canvasRef" class="neural-network-canvas"></canvas>

            <div class="animated-grid"></div>

            <div class="floating-shapes">
                <!-- 形状可以保持，作为UI的点缀 -->
                <div class="shape shape-1"></div>
                <div class="shape shape-2"></div>
                <div class="shape shape-3"></div>
            </div>

            <!-- 扫描线效果保留，增加科技感 -->
            <div class="scan-lines">
                <div class="scan-line scan-line-1"></div>
                <div class="scan-line scan-line-2"></div>
            </div>
        </div>

        <!-- 主要内容 (已更新为量化交易主题) -->
        <div class="container">
            <!-- 量化交易Logo区域 -->
            <div class="tech-header">
                <div class="logo-container">
                    <div class="logo-icon">
                        <!-- <Icon icon="mdi:sine-wave" width="32" height="32" /> -->
                    </div>
                    <!-- Logo文本增加glitch效果 -->
                    <div class="logo-text" data-text="QUANT NEXUS">QUANT NEXUS</div>
                </div>
                <div class="status-indicator">
                    <div class="status-dot"></div>
                    <span>SYSTEM ONLINE</span>
                </div>
            </div>

            <div class="main-content">
                <!-- 标题增加动画效果 -->
                <h1 class="exchange-title">
                    <span class="title-prefix">AI-Powered</span>
                    {{ t('loan.d1') }}
                </h1>
                <h1 class="exchange-title">
                    <span class="title-main">Quant Trading</span>
                </h1>
                <!-- 特性卡片修改 -->
                <div class="tech-cards">
                    <div class="tech-card toPointer">
                        <span>Bank-Grade Security</span>
                        <div class="card-glow"></div>
                    </div>
                    <div class="tech-card toPointer">
                        <span>Millisecond Execution</span>
                        <div class="card-glow"></div>
                    </div>
                    <div class="tech-card toPointer">
                        <span>AI-Driven Insights</span>
                        <div class="card-glow"></div>
                    </div>
                </div>
            </div>

            <div class="action-buttons">
                <div class="btn btn-primary" @click="changePage('/login/login')">
                    <span>Login</span>
                    <div class="btn-glow"></div>
                </div>
                <slot></slot>
                <div class="signup-prompt">
                    Don't have an account?
                    <span class="signup-link" @click="changePage('/login/register')">
                        Sign Up Now
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'sass:color'; // <--- 在这里添加了缺失的导入语句

// --- 定义量化交易主题颜色变量 (保持不变) ---
$primary-color: #623CBF;
$background-color: #130040;
$accent-glow-color: #A06EFF;
$text-color: #D9D2E9;
$text-muted-color: #9370DB;
$highlight-color: #00FFEE;

.landing-page {
    background-color: $background-color;
    color: $text-color;
    min-height: 100vh;
    padding: 20px 20px;
    position: relative;
    overflow: hidden;
   
    box-sizing: border-box;

    // --- 动态背景效果层 ---
    .tech-background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 1;

        // 新增: Canvas 神经网络样式
        .neural-network-canvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.6; // 降低不透明度，作为底层背景
        }

        .animated-grid {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:
                linear-gradient(rgba($primary-color, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba($primary-color, 0.1) 1px, transparent 1px);
            background-size: 30px 30px; // 网格更密集
            animation: gridMove 20s linear infinite;
            opacity: 0.3;
        }

        // 浮动几何图形 - 动画增强
        .floating-shapes .shape {
            position: absolute;
            border: 1px solid rgba($primary-color, 0.3);
            animation: floatEnhanced 12s ease-in-out infinite;

            // 减少数量，动画更平滑复杂
            &.shape-1 {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                top: 15%;
                left: 10%;
                animation-delay: 0s;
            }

            &.shape-2 {
                width: 30px;
                height: 30px;
                transform: rotate(45deg);
                top: 70%;
                right: 10%;
                animation-delay: 4s;
            }

            &.shape-3 {
                width: 70px;
                height: 70px;
                border-radius: 15px;
                top: 40%;
                right: 25%;
                animation-delay: 8s;
            }
        }

        .scan-lines .scan-line {
            position: absolute;
            height: 1px; // 更细的扫描线
            background: linear-gradient(90deg, transparent, rgba($accent-glow-color, 0.5), transparent);
            animation: scanMove 8s linear infinite alternate; // 来回扫描

            &.scan-line-1 {
                top: 10%;
                width: 100%;
                animation-delay: 0s;
            }

            &.scan-line-2 {
                top: 90%;
                width: 100%;
                animation-delay: 4s;
            }
        }

    }

    .container {
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        max-width: 800px;
        width: 100%;
    }

    .tech-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 4rem;
        opacity: 0;
        animation: slideInDown 1s ease-out forwards;

        .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;

            .logo-icon {
                width: 48px;
                height: 48px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                box-shadow: 0 0 20px rgba($primary-color, 0.4);
                animation: logoPulse 3s ease-in-out infinite;
            }

            .logo-text {
                font-size: 22px;
                font-weight: 800;
                color: $accent-glow-color;
                letter-spacing: 3px;
                        text-shadow: 2px 0 #E020F0; // <--- 修改后：使用一个固定的洋红色代替mix()
      
                position: relative;
                // 新增: Glitch 动画
                animation: glitch 5s linear infinite;

                // 使用伪元素创建 glitch 效果
                &::before,
                &::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: $background-color;
                    overflow: hidden;
                }

                &::before {
                    left: 2px;
                    text-shadow: 2px 0 #E020F0;
                    animation: glitch-before 5s linear infinite reverse;
                }

                &::after {
                    left: -2px;
                    text-shadow: 2px 0 #E020F0;
                    animation: glitch-after 5s linear infinite reverse;
                }
            }
        }

        .status-indicator {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 6px 12px;
            background: rgba($primary-color, .15);
            border: 1px solid rgba($primary-color, .4);
            border-radius: 20px;
            color: $accent-glow-color;
            font-size: 12px;
            font-weight: 600;

            .status-dot {
                width: 8px;
                height: 8px;
                background: $highlight-color;
                border-radius: 50%;
                animation: statusBlink 2s ease-in-out infinite;
                box-shadow: 0 0 10px rgba($highlight-color, .7)
            }
        }
    }

    .main-content {
        margin-bottom: 3rem;
        width: 100%;
        animation: fadeInUp 1s 0.2s ease-out forwards;
    }

    // 主标题增强
    .exchange-title {
        font-size: clamp(3rem, 7vw, 4.5rem); // 标题更大
        font-weight: 900;
        letter-spacing: 1px;
        line-height: 1.1;
        margin-bottom: 2.5rem;
        color: #fff; // 主色用纯白更突出
        text-shadow: 0 0 10px rgba(#fff, 0.2), 0 0 30px rgba($accent-glow-color, 0.4);
        // 新增: 辉光脉冲动画
        animation: titleGlow 4s ease-in-out infinite;

        .title-prefix {
            font-style: italic;
            font-weight: 900;
            color: $accent-glow-color;
            text-shadow: 0 0 20px rgba($accent-glow-color, 0.8);
        }

        .title-main {
            color: #fff;
        }
    }

    .tech-cards {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        flex-wrap: wrap;

        .tech-card {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px 24px;
            background: rgba($primary-color, 0.1);
            border: 1px solid rgba($primary-color, 0.25);
            border-radius: 12px;
            color: $text-muted-color;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
            backdrop-filter: blur(8px);
            position: relative;
            overflow: hidden;

            &:hover {
                background: rgba($primary-color, 0.2);
                border-color: rgba($accent-glow-color, 0.5);
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 10px 30px rgba($primary-color, 0.4);
                color: #fff;

                // 新增: 触发边框辉光动画
                .card-glow {
                    opacity: 1;
                    animation: rotateGlow 2s linear infinite;
                }
            }

            // 新增: 悬停辉光效果
            .card-glow {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 200%;
                height: 200%;
                background: conic-gradient(transparent, transparent, $accent-glow-color, transparent);
                transform-origin: center center;
                opacity: 0;
                transition: opacity 0.4s ease;
                transform: translate(-50%, -50%);
            }
        }
    }

    .action-buttons {
        gap: 1.5rem;
        opacity: 0;
        animation: fadeInUp 1s 0.4s ease-out forwards;
        .btn-primary{
            background: linear-gradient(135deg, color.adjust($accent-glow-color, $lightness: 5%) 0%, color.adjust($primary-color, $lightness: 5%) 100%);
        }
        .btn-primary:hover {
            // 已修正: 使用了导入的 color 模块
            background: linear-gradient(135deg, color.adjust($accent-glow-color, $lightness: 5%) 0%, color.adjust($primary-color, $lightness: 5%) 100%);
            transform: translateY(-4px) scale(1.03);
            // box-shadow: 0 10px 40px rgba($accent-glow-color, 0.5);

            .btn-glow {
                left: 100%;
            }
        }
    }

    // --- 按钮和注册提示 (其余样式保持不变) ---
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 1rem 2.5rem;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        text-transform: uppercase;
        border: none;
        outline: none;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        overflow: hidden;
        margin-bottom: 15px
    }

   .btn-primary:hover {
       // 使用 filter 属性来提亮按钮，效果更佳且无需Sass函数
       filter: brightness(1.15) saturate(1.1);
       transform: translateY(-4px) scale(1.03);
       box-shadow: 0 10px 40px rgba($accent-glow-color, .5);
       .btn-glow {
           left: 100%;
       }
   }

    .signup-prompt {
        font-size: 1rem;
        color: $text-muted-color;
        opacity: .9;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px
    }

    .signup-link {
        color: $accent-glow-color;
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-bottom: 4px;
        margin-left: .4rem;
        transition: color .3s ease-in-out;
        letter-spacing: .5px;
        display: flex;
        align-items: center;
        gap: 6px;

        &:hover {
            color: #fff;
            font-weight: 700
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: $accent-glow-color;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform .3s ease-in-out
        }

        &:hover::after {
            transform: scaleX(1)
        }
    }

    /* --- 动画 Keyframes (保持不变) --- */
    @keyframes gridMove {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -30px -30px;
        }
    }

    @keyframes floatEnhanced {

        0%,
        100% {
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0.7;
        }

        50% {
            transform: translateY(-30px) rotate(180deg) scale(1.05);
            opacity: 1;
        }
    }

    @keyframes scanMove {
        from {
            transform: translateX(-100%);
        }

        to {
            transform: translateX(100%);
        }
    }

    @keyframes binaryFall {
        from {
            transform: translateY(0);
        }

        to {
            transform: translateY(200%);
        }
    }

    @keyframes glitch-before {

        0%,
        5%,
        100% {
            clip-path: inset(0 0 0 0);
        }

        6% {
            clip-path: inset(40% 0 60% 0);
        }

        8% {
            clip-path: inset(80% 0 10% 0);
        }

        10% {
            clip-path: inset(10% 0 75% 0);
        }

        12% {
            clip-path: inset(50% 0 50% 0);
        }
    }

    @keyframes glitch-after {

        0%,
        5%,
        100% {
            clip-path: inset(0 0 0 0);
        }

        7% {
            clip-path: inset(0 0 100% 0);
        }

        9% {
            clip-path: inset(60% 0 30% 0);
        }

        11% {
            clip-path: inset(80% 0 5% 0);
        }

        13% {
            clip-path: inset(20% 0 60% 0);
        }
    }

    @keyframes titleGlow {

        0%,
        100% {
            text-shadow: 0 0 10px rgba(#fff, 0.2), 0 0 30px rgba($accent-glow-color, 0.4);
        }

        50% {
            text-shadow: 0 0 20px rgba(#fff, 0.4), 0 0 60px rgba($accent-glow-color, 0.8);
        }
    }

    @keyframes rotateGlow {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }

        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @keyframes logoPulse {

        0%,
        100% {
            transform: scale(1)
        }

        50% {
            transform: scale(1.05)
        }
    }

    @keyframes statusBlink {

        0%,
        100% {
            opacity: 1;
            box-shadow: 0 0 10px rgba($highlight-color, .7)
        }

        50% {
            opacity: .3;
            box-shadow: 0 0 5px rgba($highlight-color, .4)
        }
    }

    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px)
        }

        to {
            opacity: 1;
            transform: translateY(0)
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px)
        }

        to {
            opacity: 1;
            transform: translateY(0)
        }
    }
}
</style>