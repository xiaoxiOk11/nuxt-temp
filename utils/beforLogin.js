const silkNetworkOptions = {
  background: {
    color: {
      value: '#0a0a0a' // 深色背景，突出丝线效果
    }
  },
  fpsLimit: 120, // 设置为120fps
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      onHover: {
        enable: true,
        mode: 'grab'
      }
    },
    modes: {
      push: {
        quantity: 3 // 点击时添加新节点
      },
      grab: {
        distance: 300,
        links: {
          opacity: 1
        }
      },
      repulse: {
        distance: 100,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff' // 白色节点
    },
    links: {
      color: '#ffffff', // 白色丝线
      distance: 200, // 丝线连接距离
      enable: true, // 启用丝线连接
      opacity: 0.6, // 丝线透明度
      width: 2, // 丝线宽度，更明显
      triangles: {
        enable: false // 关闭三角形，保持丝线效果
      }
    },
    move: {
      direction: 'none', // 网状不需要特定方向
      enable: true,
      outModes: {
        default: 'bounce' // 边界反弹
      },
      random: true, // 随机移动
      speed: { min: 0.3, max: 1.5 }, // 较慢的移动速度，更优雅
      straight: false,
      trail: {
        enable: false // 关闭拖尾，保持丝线清晰
      }
    },
    number: {
      density: {
        enable: true,
        value_area: 1200
      },
      value: 60 // 适中的节点数量
    },
    opacity: {
      value: 1, // 节点完全不透明
      random: false,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.3,
        sync: false
      }
    },
    shape: {
      type: 'circle' // 圆形节点
    },
    size: {
      value: { min: 3, max: 8 }, // 节点大小，更明显
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 2,
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
  pauseOnBlur: true,
  pauseOnOutsideViewport: true
};

export default silkNetworkOptions;