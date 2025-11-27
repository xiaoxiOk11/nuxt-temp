<template>
    <div>
        <div>
            <div class="text_center text-red-500 font-bold p-4">
                HhHHH
            </div>
            <span class="countdown">
                <span style="--value:59;" aria-live="polite" aria-label="59">59</span>
            </span>
            <div class="fab">
                <!-- a focusable div with tabindex is necessary to work on all browsers. role="button" is necessary for accessibility -->
                <div tabindex="0" role="button" class="btn btn-lg btn-circle btn-primary">F</div>

                <!-- buttons that show up when FAB is open -->
                <button class="btn btn-lg btn-circle">A</button>
                <button class="btn btn-lg btn-circle">B</button>
                <button class="btn btn-lg btn-circle">C</button>
            </div>
            <div class="gridBox3 mt30 ">
                <div class="hover-3d center">
                    <!-- content -->
                    <figure class="w-60  rounded-2xl">
                        <img src="https://img.daisyui.com/images/stock/card-1.webp?x" alt="Tailwind CSS 3D card" />
                    </figure>
                    <!-- 8 empty divs needed for the 3D effect -->
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="hover-3d center">
                    <!-- content -->
                    <figure class="w-60 rounded-2xl">
                        <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
                    </figure>
                    <!-- 8 empty divs needed for the 3D effect -->
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div class="hover-3d center">
                    <!-- content -->
                    <figure class="w-60 rounded-2xl">
                        <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
                    </figure>
                    <!-- 8 empty divs needed for the 3D effect -->
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div class="mt30 ">
                <figure class="diff aspect-16/9" tabindex="0">
                    <div class="diff-item-1" role="img" tabindex="0">
                        <img alt="daisy"
                            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
                    </div>
                    <div class="diff-item-2" role="img">
                        <img alt="daisy"
                            src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
                    </div>
                    <div class="diff-resizer"></div>
                </figure>
            </div>
            <div class="mt30">
                <figure class="hover-gallery max-w-60">
                    <img src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp" />
                    <img src="https://img.daisyui.com/images/stock/daisyui-hat-2.webp" />
                    <img src="https://img.daisyui.com/images/stock/daisyui-hat-3.webp" />
                    <img src="https://img.daisyui.com/images/stock/daisyui-hat-4.webp" />
                </figure>
            </div>
            <div class="mt30">
                <div class="navbar bg-base-100 shadow-sm">
                    <div class="flex-none">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block h-5 w-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1">
                        <a class="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div class="flex-none">
                        <button class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block h-5 w-5 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script setup>

</script>