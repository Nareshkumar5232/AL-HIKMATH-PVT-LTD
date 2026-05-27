// AL HIKMATH ENTERPRISES PVT LTD — Mock Data
// Validates: Requirements 4.4, 4.5, 4.8, 4.9

import type {
  Product,
  Testimonial,
  Order,
  Customer,
  Brand,
  SalesDataPoint,
  AdminStats,
  ProductCategory,
} from '@/types';

// ─── PRODUCTS ────────────────────────────────────────────────────────────────

export const mockProducts: Product[] = [
  // ── electrical-appliances ──────────────────────────────────────────────────
  {
    id: 'prod-001',
    slug: 'havells-led-bulb-9w',
    name: 'Havells LED Bulb 9W',
    description:
      'Energy-efficient 9W LED bulb from Havells with a warm white glow. Ideal for home and office use. Rated for 25,000 hours of life with minimal heat emission.',
    shortDescription: 'Energy-saving 9W LED bulb, 25,000-hour lifespan.',
    price: 299,
    originalPrice: 399,
    category: 'electrical-appliances',
    brand: 'Havells',
    images: [
      '/images/products/havells-led-bulb-9w-1.jpg',
      '/images/products/havells-led-bulb-9w-2.jpg',
    ],
    rating: 4.5,
    reviewCount: 312,
    stock: 200,
    specifications: {
      Wattage: '9W',
      'Base Type': 'B22',
      'Color Temperature': '3000K (Warm White)',
      Lumens: '900 lm',
      Lifespan: '25,000 hours',
      Voltage: '220–240V',
    },
    tags: ['led', 'bulb', 'energy-saving', 'havells'],
    isFeatured: true,
    createdAt: '2024-01-10T08:00:00.000Z',
  },
  {
    id: 'prod-002',
    slug: 'syska-6-socket-extension-board',
    name: 'Syska 6-Socket Extension Board',
    description:
      'Heavy-duty 6-socket extension board with surge protection and a 2-metre cord. Child-safe shutters on all sockets. Suitable for home and office use.',
    shortDescription: '6-socket surge-protected extension board, 2m cord.',
    price: 649,
    originalPrice: 849,
    category: 'electrical-appliances',
    brand: 'Syska',
    images: [
      '/images/products/syska-extension-board-1.jpg',
      '/images/products/syska-extension-board-2.jpg',
    ],
    rating: 4.3,
    reviewCount: 187,
    stock: 150,
    specifications: {
      Sockets: '6',
      'Cord Length': '2 metres',
      'Surge Protection': 'Yes',
      'Child Safety Shutters': 'Yes',
      'Max Load': '2500W',
      Voltage: '220–240V',
    },
    tags: ['extension-board', 'surge-protection', 'syska'],
    isFeatured: false,
    createdAt: '2024-01-15T08:00:00.000Z',
  },
  {
    id: 'prod-003',
    slug: 'havells-ceiling-fan-1200mm',
    name: 'Havells Ceiling Fan 1200mm',
    description:
      'Premium 1200mm ceiling fan with BLDC motor for ultra-low power consumption. Comes with a remote control and 5-speed settings. Aerodynamically designed blades for maximum air delivery.',
    shortDescription: 'BLDC ceiling fan, remote control, 5-speed settings.',
    price: 3499,
    originalPrice: 4299,
    category: 'electrical-appliances',
    brand: 'Havells',
    images: [
      '/images/products/havells-ceiling-fan-1.jpg',
      '/images/products/havells-ceiling-fan-2.jpg',
      '/images/products/havells-ceiling-fan-3.jpg',
    ],
    rating: 4.6,
    reviewCount: 245,
    stock: 60,
    specifications: {
      'Sweep Size': '1200mm',
      'Motor Type': 'BLDC',
      'Power Consumption': '28W',
      Speeds: '5',
      'Remote Control': 'Yes',
      'Air Delivery': '230 CMM',
    },
    tags: ['ceiling-fan', 'bldc', 'remote', 'havells'],
    isFeatured: true,
    createdAt: '2024-02-01T08:00:00.000Z',
  },
  // ── electronics ───────────────────────────────────────────────────────────
  {
    id: 'prod-004',
    slug: 'samsung-43-inch-smart-tv-4k',
    name: 'Samsung 43" 4K Smart TV',
    description:
      'Samsung 43-inch Crystal 4K UHD Smart TV with Tizen OS. Features HDR10+, built-in Alexa, and a slim bezel design. Ideal for living rooms and bedrooms.',
    shortDescription: '43" 4K UHD Smart TV with HDR10+ and built-in Alexa.',
    price: 34999,
    originalPrice: 42999,
    category: 'electronics',
    brand: 'Samsung',
    images: [
      '/images/products/samsung-43-tv-1.jpg',
      '/images/products/samsung-43-tv-2.jpg',
      '/images/products/samsung-43-tv-3.jpg',
    ],
    rating: 4.7,
    reviewCount: 892,
    stock: 25,
    specifications: {
      'Screen Size': '43 inches',
      Resolution: '3840 × 2160 (4K UHD)',
      'HDR Support': 'HDR10+',
      OS: 'Tizen',
      'Voice Assistant': 'Alexa, Bixby',
      Connectivity: 'Wi-Fi, Bluetooth, 3× HDMI, 2× USB',
    },
    tags: ['smart-tv', '4k', 'samsung', 'hdr'],
    isFeatured: true,
    createdAt: '2024-01-20T08:00:00.000Z',
  },
  {
    id: 'prod-005',
    slug: 'sony-bluetooth-speaker-srs-xb23',
    name: 'Sony SRS-XB23 Bluetooth Speaker',
    description:
      'Compact waterproof Bluetooth speaker with Extra Bass technology. IP67 rated, 12-hour battery life, and a built-in microphone for hands-free calls.',
    shortDescription: 'IP67 waterproof speaker, Extra Bass, 12-hour battery.',
    price: 4999,
    originalPrice: 6490,
    category: 'electronics',
    brand: 'Sony',
    images: [
      '/images/products/sony-srs-xb23-1.jpg',
      '/images/products/sony-srs-xb23-2.jpg',
    ],
    rating: 4.5,
    reviewCount: 634,
    stock: 80,
    specifications: {
      'Driver Size': '46mm',
      'Frequency Response': '20Hz–20kHz',
      'Battery Life': '12 hours',
      'Water Resistance': 'IP67',
      Connectivity: 'Bluetooth 5.0',
      Weight: '272g',
    },
    tags: ['bluetooth-speaker', 'waterproof', 'sony', 'extra-bass'],
    isFeatured: true,
    createdAt: '2024-02-05T08:00:00.000Z',
  },
  {
    id: 'prod-006',
    slug: 'tp-link-archer-ax23-wifi6-router',
    name: 'TP-Link Archer AX23 Wi-Fi 6 Router',
    description:
      'Dual-band Wi-Fi 6 router delivering up to 1800 Mbps. Supports OFDMA and MU-MIMO for smooth streaming and gaming. Easy setup via the Tether app.',
    shortDescription: 'Wi-Fi 6 router, 1800 Mbps, OFDMA & MU-MIMO.',
    price: 3299,
    originalPrice: 3999,
    category: 'electronics',
    brand: 'TP-Link',
    images: [
      '/images/products/tp-link-ax23-1.jpg',
      '/images/products/tp-link-ax23-2.jpg',
    ],
    rating: 4.4,
    reviewCount: 421,
    stock: 45,
    specifications: {
      Standard: 'Wi-Fi 6 (802.11ax)',
      'Max Speed': '1800 Mbps',
      Bands: 'Dual-band (2.4GHz + 5GHz)',
      Antennas: '4 external',
      Ports: '1× WAN, 4× LAN (Gigabit)',
      Security: 'WPA3',
    },
    tags: ['router', 'wifi6', 'tp-link', 'networking'],
    isFeatured: false,
    createdAt: '2024-02-10T08:00:00.000Z',
  },
  // ── mobile-accessories ────────────────────────────────────────────────────
  {
    id: 'prod-007',
    slug: 'spigen-iphone-15-case-ultra-hybrid',
    name: 'Spigen iPhone 15 Ultra Hybrid Case',
    description:
      'Military-grade drop protection with a crystal-clear back panel. Air Cushion Technology absorbs shocks. Compatible with MagSafe accessories.',
    shortDescription: 'Military-grade clear case with MagSafe compatibility.',
    price: 1299,
    originalPrice: 1799,
    category: 'mobile-accessories',
    brand: 'Spigen',
    images: [
      '/images/products/spigen-iphone15-case-1.jpg',
      '/images/products/spigen-iphone15-case-2.jpg',
    ],
    rating: 4.6,
    reviewCount: 1023,
    stock: 120,
    specifications: {
      Compatibility: 'iPhone 15',
      Material: 'TPU + Polycarbonate',
      'Drop Protection': 'MIL-STD-810G',
      MagSafe: 'Compatible',
      Weight: '30g',
      Color: 'Crystal Clear',
    },
    tags: ['phone-case', 'iphone', 'spigen', 'magsafe'],
    isFeatured: false,
    createdAt: '2024-01-25T08:00:00.000Z',
  },
  {
    id: 'prod-008',
    slug: 'tempered-glass-screen-protector-samsung-s24',
    name: 'Samsung Galaxy S24 Tempered Glass Screen Protector',
    description:
      '9H hardness tempered glass screen protector with oleophobic coating. Bubble-free installation kit included. Preserves full touch sensitivity.',
    shortDescription: '9H tempered glass, oleophobic coating, bubble-free.',
    price: 399,
    originalPrice: 599,
    category: 'mobile-accessories',
    brand: 'Baseus',
    images: [
      '/images/products/samsung-s24-screen-protector-1.jpg',
      '/images/products/samsung-s24-screen-protector-2.jpg',
    ],
    rating: 4.2,
    reviewCount: 567,
    stock: 300,
    specifications: {
      Compatibility: 'Samsung Galaxy S24',
      Hardness: '9H',
      Thickness: '0.33mm',
      Coating: 'Oleophobic',
      'Touch Sensitivity': '100%',
      'Pack of': '2',
    },
    tags: ['screen-protector', 'tempered-glass', 'samsung', 'baseus'],
    isFeatured: false,
    createdAt: '2024-02-15T08:00:00.000Z',
  },
  {
    id: 'prod-009',
    slug: 'realme-20000mah-power-bank-65w',
    name: 'Realme 20000mAh Power Bank 65W',
    description:
      '20000mAh power bank with 65W SuperDart fast charging. Dual USB-A and one USB-C output. Can charge a laptop, tablet, and phone simultaneously.',
    shortDescription: '20000mAh, 65W fast charging, charges 3 devices at once.',
    price: 2499,
    originalPrice: 3499,
    category: 'mobile-accessories',
    brand: 'Realme',
    images: [
      '/images/products/realme-powerbank-65w-1.jpg',
      '/images/products/realme-powerbank-65w-2.jpg',
    ],
    rating: 4.5,
    reviewCount: 389,
    stock: 90,
    specifications: {
      Capacity: '20000mAh',
      'Max Output': '65W',
      'Input Port': 'USB-C (65W)',
      'Output Ports': '2× USB-A, 1× USB-C',
      Weight: '440g',
      Dimensions: '162 × 76 × 22mm',
    },
    tags: ['power-bank', 'fast-charging', 'realme', '65w'],
    isFeatured: true,
    createdAt: '2024-03-01T08:00:00.000Z',
  },
  // ── computer-accessories ──────────────────────────────────────────────────
  {
    id: 'prod-010',
    slug: 'keychron-k2-mechanical-keyboard',
    name: 'Keychron K2 Mechanical Keyboard',
    description:
      'Compact 75% wireless mechanical keyboard with Gateron G Pro switches. Compatible with Mac and Windows. RGB backlight with 18 lighting effects.',
    shortDescription: '75% wireless mechanical keyboard, RGB, Mac & Windows.',
    price: 7499,
    originalPrice: 8999,
    category: 'computer-accessories',
    brand: 'Keychron',
    images: [
      '/images/products/keychron-k2-1.jpg',
      '/images/products/keychron-k2-2.jpg',
      '/images/products/keychron-k2-3.jpg',
    ],
    rating: 4.8,
    reviewCount: 712,
    stock: 35,
    specifications: {
      Layout: '75% (84 keys)',
      Switch: 'Gateron G Pro Red',
      Connectivity: 'Bluetooth 5.1 / USB-C',
      Backlight: 'RGB (18 effects)',
      Battery: '4000mAh',
      Compatibility: 'Mac, Windows, iOS, Android',
    },
    tags: ['mechanical-keyboard', 'wireless', 'keychron', 'rgb'],
    isFeatured: true,
    createdAt: '2024-01-30T08:00:00.000Z',
  },
  {
    id: 'prod-011',
    slug: 'logitech-g502-hero-gaming-mouse',
    name: 'Logitech G502 HERO Gaming Mouse',
    description:
      'High-performance gaming mouse with HERO 25K sensor. 11 programmable buttons, adjustable weight system, and LIGHTSYNC RGB. Up to 25,600 DPI.',
    shortDescription: 'HERO 25K sensor, 11 buttons, adjustable weight, RGB.',
    price: 4999,
    originalPrice: 5999,
    category: 'computer-accessories',
    brand: 'Logitech',
    images: [
      '/images/products/logitech-g502-1.jpg',
      '/images/products/logitech-g502-2.jpg',
    ],
    rating: 4.7,
    reviewCount: 1456,
    stock: 55,
    specifications: {
      Sensor: 'HERO 25K',
      'Max DPI': '25,600',
      Buttons: '11 programmable',
      'Weight System': 'Adjustable (up to 18g)',
      Connectivity: 'USB (wired)',
      Lighting: 'LIGHTSYNC RGB',
    },
    tags: ['gaming-mouse', 'logitech', 'g502', 'rgb'],
    isFeatured: true,
    createdAt: '2024-02-20T08:00:00.000Z',
  },
  {
    id: 'prod-012',
    slug: 'anker-7-in-1-usb-c-hub',
    name: 'Anker 7-in-1 USB-C Hub',
    description:
      '7-in-1 USB-C hub with 4K HDMI, 100W Power Delivery, SD/microSD card readers, and 3 USB-A 3.0 ports. Compact and bus-powered.',
    shortDescription: '7-in-1 hub: 4K HDMI, 100W PD, SD reader, 3× USB-A.',
    price: 2999,
    originalPrice: 3799,
    category: 'computer-accessories',
    brand: 'Anker',
    images: [
      '/images/products/anker-usb-hub-1.jpg',
      '/images/products/anker-usb-hub-2.jpg',
    ],
    rating: 4.5,
    reviewCount: 834,
    stock: 70,
    specifications: {
      Ports: '7',
      HDMI: '4K@30Hz',
      'Power Delivery': '100W',
      'USB-A': '3× USB 3.0 (5Gbps)',
      'Card Reader': 'SD + microSD',
      'Bus Powered': 'Yes',
    },
    tags: ['usb-hub', 'usb-c', 'anker', '4k-hdmi'],
    isFeatured: false,
    createdAt: '2024-03-05T08:00:00.000Z',
  },
  {
    id: 'prod-013',
    slug: 'dell-27-inch-ips-monitor',
    name: 'Dell 27" IPS Monitor (S2722DC)',
    description:
      '27-inch QHD IPS monitor with USB-C connectivity and 75Hz refresh rate. Slim bezel design with height-adjustable stand. Ideal for productivity and creative work.',
    shortDescription: '27" QHD IPS, USB-C, 75Hz, height-adjustable stand.',
    price: 24999,
    originalPrice: 29999,
    category: 'computer-accessories',
    brand: 'Dell',
    images: [
      '/images/products/dell-s2722dc-1.jpg',
      '/images/products/dell-s2722dc-2.jpg',
    ],
    rating: 4.6,
    reviewCount: 298,
    stock: 20,
    specifications: {
      'Screen Size': '27 inches',
      Resolution: '2560 × 1440 (QHD)',
      'Panel Type': 'IPS',
      'Refresh Rate': '75Hz',
      Connectivity: 'USB-C (65W), HDMI, DisplayPort',
      'Response Time': '4ms (GtG)',
    },
    tags: ['monitor', 'dell', 'qhd', 'ips', 'usb-c'],
    isFeatured: true,
    createdAt: '2024-03-10T08:00:00.000Z',
  },
  // ── chargers ──────────────────────────────────────────────────────────────
  {
    id: 'prod-014',
    slug: 'baseus-65w-gan-charger',
    name: 'Baseus 65W GaN Charger',
    description:
      'Compact GaN charger with 65W output. Charges a MacBook, iPad, and iPhone simultaneously via 2× USB-C and 1× USB-A ports. Foldable plug for easy travel.',
    shortDescription: '65W GaN, 3 ports (2× USB-C + 1× USB-A), foldable plug.',
    price: 1999,
    originalPrice: 2799,
    category: 'chargers',
    brand: 'Baseus',
    images: [
      '/images/products/baseus-65w-gan-1.jpg',
      '/images/products/baseus-65w-gan-2.jpg',
    ],
    rating: 4.6,
    reviewCount: 923,
    stock: 110,
    specifications: {
      'Total Output': '65W',
      Ports: '2× USB-C, 1× USB-A',
      'USB-C Max': '65W (single port)',
      Technology: 'GaN III',
      'Plug Type': 'Foldable (Type-G)',
      Dimensions: '48 × 48 × 30mm',
    },
    tags: ['charger', 'gan', 'baseus', '65w', 'fast-charging'],
    isFeatured: true,
    createdAt: '2024-01-18T08:00:00.000Z',
  },
  {
    id: 'prod-015',
    slug: 'samsung-15w-wireless-charger-pad',
    name: 'Samsung 15W Wireless Charger Pad',
    description:
      'Official Samsung 15W wireless charging pad compatible with all Qi-enabled devices. LED indicator, anti-slip surface, and over-charge protection built in.',
    shortDescription: '15W Qi wireless charger, LED indicator, anti-slip.',
    price: 1499,
    originalPrice: 1999,
    category: 'chargers',
    brand: 'Samsung',
    images: [
      '/images/products/samsung-wireless-charger-1.jpg',
      '/images/products/samsung-wireless-charger-2.jpg',
    ],
    rating: 4.4,
    reviewCount: 541,
    stock: 85,
    specifications: {
      'Max Output': '15W',
      Standard: 'Qi',
      'Input Port': 'USB-C',
      'LED Indicator': 'Yes',
      'Over-charge Protection': 'Yes',
      Compatibility: 'Samsung, iPhone, all Qi devices',
    },
    tags: ['wireless-charger', 'qi', 'samsung', '15w'],
    isFeatured: false,
    createdAt: '2024-02-25T08:00:00.000Z',
  },
  // ── earphones ─────────────────────────────────────────────────────────────
  {
    id: 'prod-016',
    slug: 'oneplus-nord-buds-2-tws',
    name: 'OnePlus Nord Buds 2 TWS Earbuds',
    description:
      'True wireless earbuds with 12.4mm dynamic drivers and Active Noise Cancellation. Up to 36 hours total playback with the charging case. IP55 rated.',
    shortDescription: 'ANC TWS earbuds, 36-hour total battery, IP55.',
    price: 2799,
    originalPrice: 3499,
    category: 'earphones',
    brand: 'OnePlus',
    images: [
      '/images/products/oneplus-nord-buds2-1.jpg',
      '/images/products/oneplus-nord-buds2-2.jpg',
    ],
    rating: 4.4,
    reviewCount: 1102,
    stock: 95,
    specifications: {
      'Driver Size': '12.4mm',
      ANC: 'Yes (up to 25dB)',
      'Earbud Battery': '7 hours',
      'Total Battery': '36 hours (with case)',
      'Water Resistance': 'IP55',
      Connectivity: 'Bluetooth 5.3',
    },
    tags: ['tws', 'earbuds', 'anc', 'oneplus'],
    isFeatured: true,
    createdAt: '2024-03-15T08:00:00.000Z',
  },
  {
    id: 'prod-017',
    slug: 'boult-audio-bassbuds-wired-earphones',
    name: 'Boult Audio BassBuds Wired Earphones',
    description:
      'In-ear wired earphones with deep bass and a built-in microphone. Tangle-free flat cable with a 3.5mm gold-plated jack. Ergonomic fit for all-day comfort.',
    shortDescription: 'Deep bass wired earphones, tangle-free cable, mic.',
    price: 499,
    originalPrice: 799,
    category: 'earphones',
    brand: 'Boult Audio',
    images: [
      '/images/products/boult-bassbuds-1.jpg',
      '/images/products/boult-bassbuds-2.jpg',
    ],
    rating: 4.1,
    reviewCount: 2341,
    stock: 250,
    specifications: {
      'Driver Size': '10mm',
      'Frequency Response': '20Hz–20kHz',
      Impedance: '32Ω',
      'Cable Length': '1.2m',
      'Jack Type': '3.5mm (gold-plated)',
      Microphone: 'Yes',
    },
    tags: ['wired-earphones', 'bass', 'boult', 'budget'],
    isFeatured: false,
    createdAt: '2024-01-05T08:00:00.000Z',
  },
  // ── smart-devices ─────────────────────────────────────────────────────────
  {
    id: 'prod-018',
    slug: 'realme-watch-3-pro-smartwatch',
    name: 'Realme Watch 3 Pro Smartwatch',
    description:
      'Feature-packed smartwatch with a 1.78" AMOLED display, built-in GPS, and 110+ sports modes. SpO2 and heart-rate monitoring. 5-day battery life.',
    shortDescription: '1.78" AMOLED, built-in GPS, 110+ sports modes, SpO2.',
    price: 5999,
    originalPrice: 7999,
    category: 'smart-devices',
    brand: 'Realme',
    images: [
      '/images/products/realme-watch3pro-1.jpg',
      '/images/products/realme-watch3pro-2.jpg',
      '/images/products/realme-watch3pro-3.jpg',
    ],
    rating: 4.3,
    reviewCount: 678,
    stock: 40,
    specifications: {
      Display: '1.78" AMOLED',
      GPS: 'Built-in',
      'Sports Modes': '110+',
      'Health Sensors': 'SpO2, Heart Rate, Stress',
      'Battery Life': '5 days',
      'Water Resistance': '5ATM',
    },
    tags: ['smartwatch', 'gps', 'amoled', 'realme'],
    isFeatured: true,
    createdAt: '2024-03-20T08:00:00.000Z',
  },
  {
    id: 'prod-019',
    slug: 'syska-smart-bulb-9w-wifi',
    name: 'Syska Smart Bulb 9W Wi-Fi',
    description:
      'Wi-Fi enabled smart LED bulb compatible with Alexa and Google Home. 16 million colours, adjustable brightness, and scheduling via the Syska Smart app.',
    shortDescription: 'Wi-Fi smart bulb, 16M colours, Alexa & Google Home.',
    price: 799,
    originalPrice: 999,
    category: 'smart-devices',
    brand: 'Syska',
    images: [
      '/images/products/syska-smart-bulb-1.jpg',
      '/images/products/syska-smart-bulb-2.jpg',
    ],
    rating: 4.2,
    reviewCount: 445,
    stock: 180,
    specifications: {
      Wattage: '9W',
      'Base Type': 'B22',
      Colors: '16 million (RGBW)',
      Connectivity: 'Wi-Fi 2.4GHz',
      'Voice Control': 'Alexa, Google Home',
      Lifespan: '25,000 hours',
    },
    tags: ['smart-bulb', 'wifi', 'alexa', 'syska'],
    isFeatured: false,
    createdAt: '2024-02-28T08:00:00.000Z',
  },
  {
    id: 'prod-020',
    slug: 'philips-smart-plug-16a',
    name: 'Philips Smart Plug 16A',
    description:
      'Wi-Fi smart plug with energy monitoring. Control any appliance remotely via the Philips Hue app or voice commands. Supports scheduling and timers.',
    shortDescription: '16A smart plug with energy monitoring and voice control.',
    price: 1299,
    originalPrice: 1699,
    category: 'smart-devices',
    brand: 'Philips',
    images: [
      '/images/products/philips-smart-plug-1.jpg',
      '/images/products/philips-smart-plug-2.jpg',
    ],
    rating: 4.4,
    reviewCount: 312,
    stock: 130,
    specifications: {
      'Max Load': '16A / 3680W',
      Connectivity: 'Wi-Fi 2.4GHz',
      'Energy Monitoring': 'Yes',
      'Voice Control': 'Alexa, Google Home',
      Scheduling: 'Yes',
      'Plug Type': 'Type-D (Indian)',
    },
    tags: ['smart-plug', 'energy-monitoring', 'philips', 'wifi'],
    isFeatured: true,
    createdAt: '2024-03-25T08:00:00.000Z',
  },
  {
    id: 'prod-021',
    slug: 'lg-32-inch-full-hd-monitor',
    name: 'LG 32" Full HD IPS Monitor',
    description:
      '32-inch Full HD IPS monitor with AMD FreeSync and 75Hz refresh rate. Borderless design with tilt-adjustable stand. Ideal for everyday computing.',
    shortDescription: '32" FHD IPS, 75Hz, AMD FreeSync, borderless design.',
    price: 18999,
    originalPrice: 22999,
    category: 'computer-accessories',
    brand: 'LG',
    images: [
      '/images/products/lg-32fhd-monitor-1.jpg',
      '/images/products/lg-32fhd-monitor-2.jpg',
    ],
    rating: 4.5,
    reviewCount: 534,
    stock: 18,
    specifications: {
      'Screen Size': '32 inches',
      Resolution: '1920 × 1080 (Full HD)',
      'Panel Type': 'IPS',
      'Refresh Rate': '75Hz',
      'Sync Technology': 'AMD FreeSync',
      Connectivity: 'HDMI, DisplayPort, USB-A',
    },
    tags: ['monitor', 'lg', 'fhd', 'ips', 'freesync'],
    isFeatured: false,
    createdAt: '2024-04-01T08:00:00.000Z',
  },
  {
    id: 'prod-022',
    slug: 'bosch-table-fan-400mm',
    name: 'Bosch 400mm Table Fan',
    description:
      'Powerful 400mm table fan with 3-speed settings and a 7-hour timer. Oscillation angle of 90°. Quiet motor suitable for bedrooms and offices.',
    shortDescription: '400mm table fan, 3-speed, 7-hour timer, 90° oscillation.',
    price: 2199,
    originalPrice: 2799,
    category: 'electrical-appliances',
    brand: 'Bosch',
    images: [
      '/images/products/bosch-table-fan-1.jpg',
      '/images/products/bosch-table-fan-2.jpg',
    ],
    rating: 4.3,
    reviewCount: 198,
    stock: 75,
    specifications: {
      'Blade Size': '400mm',
      Speeds: '3',
      Timer: '7 hours',
      Oscillation: '90°',
      'Noise Level': '45dB',
      Power: '55W',
    },
    tags: ['table-fan', 'bosch', 'timer', 'oscillation'],
    isFeatured: false,
    createdAt: '2024-04-05T08:00:00.000Z',
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

export const mockTestimonials: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Arjun Krishnamurthy',
    role: 'Software Engineer, Chennai',
    content:
      'AL HIKMATH has been my go-to store for all electronics. The Keychron keyboard I bought arrived the next day and the quality is exactly as described. Excellent service!',
    rating: 5,
    avatar: '/images/avatars/arjun.jpg',
  },
  {
    id: 'test-002',
    name: 'Priya Subramaniam',
    role: 'Interior Designer, Anna Nagar',
    content:
      'Ordered the Havells ceiling fan and the Syska smart bulbs together. Both were delivered promptly and the installation guide was very helpful. Will definitely order again.',
    rating: 5,
    avatar: '/images/avatars/priya.jpg',
  },
  {
    id: 'test-003',
    name: 'Mohammed Farhan',
    role: 'Business Owner, T. Nagar',
    content:
      'Bought 10 extension boards for my office. Got a bulk discount and the delivery was on time. The products are genuine and the after-sales support is top-notch.',
    rating: 4,
    avatar: '/images/avatars/farhan.jpg',
  },
  {
    id: 'test-004',
    name: 'Deepa Venkataraman',
    role: 'Teacher, Adyar',
    content:
      'The Samsung Smart TV I purchased is fantastic. The picture quality is stunning and setup was easy. AL HIKMATH offered the best price I found anywhere in Chennai.',
    rating: 5,
    avatar: '/images/avatars/deepa.jpg',
  },
  {
    id: 'test-005',
    name: 'Karthik Rajan',
    role: 'Freelance Photographer, Velachery',
    content:
      'The Dell monitor is perfect for my photo editing work. Colours are accurate and the USB-C connectivity is very convenient. Highly recommend AL HIKMATH for computer accessories.',
    rating: 5,
    avatar: '/images/avatars/karthik.jpg',
  },
  {
    id: 'test-006',
    name: 'Lakshmi Narayanan',
    role: 'Homemaker, Mylapore',
    content:
      'Ordered the Philips smart plug and the Syska smart bulb. The setup with Alexa was seamless. Great products at reasonable prices. The team was very helpful over the phone.',
    rating: 4,
    avatar: '/images/avatars/lakshmi.jpg',
  },
];

// ─── CUSTOMERS ────────────────────────────────────────────────────────────────

export const mockCustomers: Customer[] = [
  {
    id: 'cust-001',
    name: 'Arjun Krishnamurthy',
    email: 'arjun.k@example.com',
    registeredAt: '2023-06-15T10:30:00.000Z',
    totalOrders: 8,
  },
  {
    id: 'cust-002',
    name: 'Priya Subramaniam',
    email: 'priya.s@example.com',
    registeredAt: '2023-08-22T14:00:00.000Z',
    totalOrders: 5,
  },
  {
    id: 'cust-003',
    name: 'Mohammed Farhan',
    email: 'farhan.m@example.com',
    registeredAt: '2023-09-10T09:15:00.000Z',
    totalOrders: 12,
  },
  {
    id: 'cust-004',
    name: 'Deepa Venkataraman',
    email: 'deepa.v@example.com',
    registeredAt: '2023-11-05T11:45:00.000Z',
    totalOrders: 3,
  },
  {
    id: 'cust-005',
    name: 'Karthik Rajan',
    email: 'karthik.r@example.com',
    registeredAt: '2024-01-18T16:20:00.000Z',
    totalOrders: 6,
  },
  {
    id: 'cust-006',
    name: 'Lakshmi Narayanan',
    email: 'lakshmi.n@example.com',
    registeredAt: '2024-02-03T08:00:00.000Z',
    totalOrders: 4,
  },
  {
    id: 'cust-007',
    name: 'Suresh Babu',
    email: 'suresh.b@example.com',
    registeredAt: '2024-02-20T13:30:00.000Z',
    totalOrders: 2,
  },
  {
    id: 'cust-008',
    name: 'Anitha Selvam',
    email: 'anitha.s@example.com',
    registeredAt: '2024-03-12T10:00:00.000Z',
    totalOrders: 1,
  },
];

// ─── ORDERS ───────────────────────────────────────────────────────────────────

export const mockOrders: Order[] = [
  {
    id: 'ord-001',
    customerId: 'cust-001',
    customerName: 'Arjun Krishnamurthy',
    items: [
      { product: mockProducts[9], quantity: 1 },  // Keychron K2
      { product: mockProducts[10], quantity: 1 }, // Logitech G502
    ],
    subtotal: 12498,
    tax: 2249,
    total: 14747,
    status: 'delivered',
    createdAt: '2024-03-01T10:00:00.000Z',
  },
  {
    id: 'ord-002',
    customerId: 'cust-002',
    customerName: 'Priya Subramaniam',
    items: [
      { product: mockProducts[2], quantity: 1 },  // Havells Ceiling Fan
      { product: mockProducts[18], quantity: 3 }, // Syska Smart Bulb
    ],
    subtotal: 5896,
    tax: 1061,
    total: 6957,
    status: 'delivered',
    createdAt: '2024-03-10T14:30:00.000Z',
  },
  {
    id: 'ord-003',
    customerId: 'cust-003',
    customerName: 'Mohammed Farhan',
    items: [
      { product: mockProducts[1], quantity: 10 }, // Syska Extension Board
    ],
    subtotal: 6490,
    tax: 1168,
    total: 7658,
    status: 'shipped',
    createdAt: '2024-04-02T09:00:00.000Z',
  },
  {
    id: 'ord-004',
    customerId: 'cust-004',
    customerName: 'Deepa Venkataraman',
    items: [
      { product: mockProducts[3], quantity: 1 },  // Samsung 43" TV
    ],
    subtotal: 34999,
    tax: 6299,
    total: 41298,
    status: 'processing',
    createdAt: '2024-04-10T16:00:00.000Z',
  },
  {
    id: 'ord-005',
    customerId: 'cust-005',
    customerName: 'Karthik Rajan',
    items: [
      { product: mockProducts[12], quantity: 1 }, // Dell 27" Monitor
      { product: mockProducts[11], quantity: 1 }, // Anker USB-C Hub
    ],
    subtotal: 27998,
    tax: 5039,
    total: 33037,
    status: 'pending',
    createdAt: '2024-04-15T11:20:00.000Z',
  },
  {
    id: 'ord-006',
    customerId: 'cust-006',
    customerName: 'Lakshmi Narayanan',
    items: [
      { product: mockProducts[19], quantity: 2 }, // Philips Smart Plug
      { product: mockProducts[18], quantity: 2 }, // Syska Smart Bulb
    ],
    subtotal: 4196,
    tax: 755,
    total: 4951,
    status: 'cancelled',
    createdAt: '2024-04-08T08:45:00.000Z',
  },
];

// ─── BRANDS ───────────────────────────────────────────────────────────────────

export const mockBrands: Brand[] = [
  { id: 'brand-001', name: 'Samsung', logo: '/images/brands/samsung.svg', website: 'https://www.samsung.com/in/' },
  { id: 'brand-002', name: 'Apple', logo: '/images/brands/apple.svg', website: 'https://www.apple.com/in/' },
  { id: 'brand-003', name: 'Sony', logo: '/images/brands/sony.svg', website: 'https://www.sony.co.in/' },
  { id: 'brand-004', name: 'LG', logo: '/images/brands/lg.svg', website: 'https://www.lg.com/in/' },
  { id: 'brand-005', name: 'Philips', logo: '/images/brands/philips.svg', website: 'https://www.philips.co.in/' },
  { id: 'brand-006', name: 'Bosch', logo: '/images/brands/bosch.svg', website: 'https://www.bosch-home.com/in/' },
  { id: 'brand-007', name: 'Havells', logo: '/images/brands/havells.svg', website: 'https://www.havells.com/' },
  { id: 'brand-008', name: 'Syska', logo: '/images/brands/syska.svg', website: 'https://www.syska.in/' },
  { id: 'brand-009', name: 'Realme', logo: '/images/brands/realme.svg', website: 'https://www.realme.com/in/' },
  { id: 'brand-010', name: 'OnePlus', logo: '/images/brands/oneplus.svg', website: 'https://www.oneplus.in/' },
  { id: 'brand-011', name: 'Logitech', logo: '/images/brands/logitech.svg', website: 'https://www.logitech.com/en-in/' },
  { id: 'brand-012', name: 'Anker', logo: '/images/brands/anker.svg', website: 'https://www.anker.com/' },
];

// ─── SALES DATA ───────────────────────────────────────────────────────────────

export const mockSalesData: SalesDataPoint[] = [
  { month: 'Jan 2024', revenue: 182500, orders: 48 },
  { month: 'Feb 2024', revenue: 215000, orders: 57 },
  { month: 'Mar 2024', revenue: 198000, orders: 52 },
  { month: 'Apr 2024', revenue: 243000, orders: 64 },
  { month: 'May 2024', revenue: 267500, orders: 71 },
  { month: 'Jun 2024', revenue: 231000, orders: 61 },
  { month: 'Jul 2024', revenue: 289000, orders: 76 },
  { month: 'Aug 2024', revenue: 312000, orders: 82 },
  { month: 'Sep 2024', revenue: 278500, orders: 73 },
  { month: 'Oct 2024', revenue: 345000, orders: 91 },
  { month: 'Nov 2024', revenue: 421000, orders: 111 },
  { month: 'Dec 2024', revenue: 398000, orders: 105 },
];

// ─── ADMIN STATS ──────────────────────────────────────────────────────────────

export const mockAdminStats: AdminStats = {
  totalRevenue: 3380500,
  totalOrders: 891,
  totalProducts: mockProducts.length,
  totalCustomers: mockCustomers.length,
};

// ─── DERIVED / HELPER EXPORTS ─────────────────────────────────────────────────

/** Products where isFeatured === true */
export const featuredProducts: Product[] = mockProducts.filter(
  (p) => p.isFeatured,
);

/**
 * Returns the product matching the given slug, or undefined if not found.
 */
export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find((p) => p.slug === slug);
}

/**
 * Returns all products belonging to the given category.
 */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return mockProducts.filter((p) => p.category === category);
}

/**
 * Returns up to `limit` products from the same category as `product`,
 * excluding the product itself. Defaults to 4.
 */
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return mockProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
