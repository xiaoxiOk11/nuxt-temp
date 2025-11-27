const beforLoginOptions = {
  background: {
    color: {
      value: '#0a0a0a' // 深色背景，突出雪花效果
    }
  },
  fpsLimit: 120, // 设置为60fps
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'repulse'
      }
    },
    modes: {
      push: {
        quantity: 6 // 点击时添加更多雪花
      },
      repulse: {
        distance: 60,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff' // 白色雪花
    },
    links: {
      color: '#ffffff',
      distance: 0, // 雪花不需要连线
      enable: false,
      opacity: 0,
      width: 0
    },
    move: {
      direction: 'top', // 雪花向上飘动
      enable: true,
      outModes: {
        default: 'out' // 雪花从顶部重新出现
      },
      random: true, // 随机移动
      speed: { min: 0.5, max: 3 }, // 雪花飘动速度
      straight: false,
      gravity: {
        enable: false, // 关闭重力，让雪花向上飘
        acceleration: 0,
        maxSpeed: 0
      }
    },
    number: {
      density: {
        enable: true,
        value_area: 400
      },
      value: 50 // 大幅增加雪花数量
    },
    opacity: {
      value: { min: 0.1, max: 0.8 }, // 雪花透明度变化
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    shape: {
      type: 'circle' // 圆形雪花
    },
    size: {
      value: { min: 1, max: 8 }, // 雪花大小范围
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false
      }
    },
    twinkle: {
      particles: {
        enable: true,
        frequency: 0.05,
        opacity: 1
      }
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: {
          enable: false,
          delay: 0
        }
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: {
          enable: false,
          delay: 0
        }
      }
    }
  },
  detectRetina: true,
  pauseOnBlur: true, // 失去焦点时暂停
  pauseOnOutsideViewport: true // 离开视口时暂停
};

export default beforLoginOptions;