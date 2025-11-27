<script setup>
import { useRouter } from 'vue-router';
import { useI18n } from "vue-i18n";
import { loadSlim } from "tsparticles-slim";
import beforLoginOptions from '~/utils/beforLogin.js';

const { t } = useI18n();
const router = useRouter();

const changePage = (path) => {
    router.push({ path });
};

// 这个函数会在粒子引擎加载后执行
const particlesInit = async (engine) => {
    // 你可以在这里加载更多的形状或插件
    await loadSlim(engine);
};

// 粒子效果的配置对象
const particlesOptions = beforLoginOptions;
</script>

<template>
    <div class='landing-page'>
        <!-- 02主题：雪花粒子效果 -->
        <vue-particles id="tsparticles-02" :particlesInit="particlesInit" :options="particlesOptions"
            style="width: 100px;height: 100%;" />
        <div class="container">
            <div class="main-content">
                <h1 class="exchange-title">
                    <span class="lvs-prefix">LVS</span><span class="exchange-name">Exchange</span>
                </h1>
                <p class="exchange-tagline">
                    {{ t('login.r20') }}<br>
                    {{ t('login.r21') }}
                </p>
            </div>
            <div class="action-buttons">
                <button class="btn btn-primary" @click="changePage('/login')">
                    {{ t('login.a2') }} <!-- Login -->
                </button>
                <slot></slot>
                <div class="signup-prompt">
                    {{ t('login.r18') }} <!-- Don't have an account yet? -->
                    <span class="signup-link" @click="changePage('/register')">
                        {{ t('login.r19') }} <!-- Sign up -->
                    </span>.
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.landing-page {
    background-color: #000;
    /* Using the provided image as the base background */
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    /* Full viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 1rem;
    /* Responsive vertical padding */
    position: relative;
    overflow: hidden;
    max-width: 530px;
    margin: 0 auto;
    /* Crucial for animations and overlays */
    box-sizing: border-box;





    .container {
        position: relative;
        /* Ensure container content is above pseudo-elements */
        z-index: 3;
        /* Position content above particles, stars and overlay */
        max-width: 960px;
        /* Limit width for better readability on large screens */
        width: 100%;
        margin: 0 auto;
        padding: 0 20px;
        /* Responsive horizontal padding */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .main-content {
        margin-bottom: 3rem;
        /* Space between title/tagline and buttons */
        opacity: 0;
        /* Start hidden for animation */
        animation: fadeInDown 1s ease-out forwards;
    }

    .exchange-title {
        font-size: 60px;
        /* Responsive font size */
        font-weight: 800;
        /* Extra bold */
        letter-spacing: 2px;
        /* Standard spacing */
        line-height: 1.1;
        margin-bottom: 1rem;
        color: #fff;
        /* Pure white for title */
        /* Enhanced subtle glow */
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.3),
            0 0 20px rgba(255, 255, 255, 0.2);

        .lvs-prefix {
            font-style: italic;
            font-weight: 900;
            /* Ultra bold italic */
            color: #8ac6d1;
            /* A cool, futuristic accent color */
            margin-right: 0.5rem;
            /* Stronger glow for the prefix */
            text-shadow: 0 0 15px rgba(138, 198, 209, 0.8),
                0 0 25px rgba(138, 198, 209, 0.6);
            letter-spacing: 1px;
            /* Slightly tighter spacing for prefix */
        }

        .exchange-name {
            font-weight: 900;
            /* Ultra bold */
            color: #fff;
            letter-spacing: 1px;
            /* Slightly tighter spacing */
        }
    }

    .exchange-tagline {
        font-size: clamp(1.1rem, 2.5vw, 1.6rem);
        /* Responsive tagline size */
        font-weight: 300;
        /* Lighter weight for readability */
        line-height: 1.7;
        /* Slightly increased leading for better spacing */
        color: rgba(224, 224, 224, 0.85);
        /* Adjusted opacity for softer feel */
        letter-spacing: 0.5px;
        opacity: 0;
        /* Start hidden for animation */
        animation: fadeInUp 1s 0.2s ease-out forwards;
        /* Staggered entrance */
    }

    .action-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        /* Spacing between buttons/links */
        opacity: 0;
        /* Start hidden for animation */
        animation: fadeInUp 1s 0.4s ease-out forwards;
        /* Staggered entrance */
    }

    /* Base Button Styling */
    .btn {
        display: inline-block;
        padding: 1rem 2.5rem;
        border-radius: 50px;
        /* Rounded corners */
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        /* Smooth transitions */
        text-transform: uppercase;
        /* Uppercase text */
        border: none;
        outline: none;
        box-sizing: border-box;
        min-width: 220px;
        /* Ensure a decent minimum width */
        text-align: center;
        position: relative;
        /* For potential future effects */
        overflow: hidden;
        /* Ensure gradients/shadows stay within bounds */
    }

    /* Primary Button (Login) */
    .btn-primary {
        /* Vibrant gradient suggesting technology and finance */
        background: linear-gradient(90deg, #4facfe 0%, #00f2fe 100%);
        color: #000;
        /* Dark text for contrast */
        box-shadow: 0 5px 25px rgba(0, 150, 255, 0.4);
        /* Blueish glow */
    }

    .btn-primary:hover {
        /* Reverse gradient on hover for dynamic effect */
        background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
        transform: translateY(-4px) scale(1.03);
        /* Slight lift and scale */
        /* Stronger, layered glow */
        box-shadow: 0 10px 40px rgba(0, 150, 255, 0.6),
            0 0 15px rgba(0, 200, 255, 0.5);
    }

    /* Sign Up Prompt and Link */
    .signup-prompt {
        font-size: 1rem;
        color: #ccc;
        opacity: 0.9;
    }

    .signup-link {
        color: #8ac6d1;
        /* Use the accent color */
        font-weight: 600;
        cursor: pointer;
        position: relative;
        padding-bottom: 4px;
        /* Space for the animated underline */
        margin-left: 0.4rem;
        /* Space between text and link */
        transition: color 0.1s ease-in-out, font-weight 0.1s ease-in-out;
        letter-spacing: 0.5px;
        /* Subtle spacing */
    }

    .signup-link:hover {
        color: #fff;
        /* Brighter on hover */
        font-weight: 700;
        /* Slightly bolder */
    }

    /* Animated underline for signup link */
    .signup-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        /* Slightly thicker underline */
        background-color: #8ac6d1;
        /* Accent color */
        transform: scaleX(0);
        /* Initially hidden */
        transform-origin: center;
        /* Center the scaling */
        transition: transform 0.1s ease-in-out;
    }

    .signup-link:hover::after {
        transform: scaleX(1);
        /* Reveal underline on hover */
    }

    /* Keyframe animations for entrance effects */
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-50px);
            /* Slightly less distance */
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
            /* Slightly less distance */
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
}
</style>