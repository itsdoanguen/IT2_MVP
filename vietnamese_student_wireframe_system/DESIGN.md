---
name: Vietnamese Student Wireframe System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#36455b'
  on-tertiary: '#ffffff'
  tertiary-container: '#4d5d73'
  on-tertiary-container: '#c5d6f0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system establishes a high-clarity, structural low-to-mid fidelity wireframe environment tailored specifically for a Vietnamese higher-education ecosystem ("Cổng Thông Tin & Hỗ Trợ Sinh Viên"). 

The visual style merges architectural blueprint precision with functional SaaS clarity. It emphasizes clean wireframe scaffolding, crisp borders, and subtle structural divisions to allow students, faculty, and administrative staff to focus completely on task completion: course registration, scholarship requests, transcript verification, and student ticket submissions.

Key characteristics:
- **Tone:** Academic, dependable, functional, and organized.
- **Wireframe Aesthetic:** Deliberate grayscale surfaces accented by crisp outlines, schematic placeholders, and deliberate contrast hierarchies.
- **Accent Strategy:** Reserved exclusively for calls to action, focus states, interactive progress, and critical status indicators to eliminate visual clutter.
- **Localization Intent:** Native typographic balance tuned for multi-accented Vietnamese characters (dấu thanh), preventing glyph clipping and awkward line-wrapping in dense data sets.

## Colors

The palette is engineered around an architectural wireframe schema. By restricting saturated color almost entirely to primary action paths, the interface reduces cognitive load and maintains high scannability.

- **Primary Accent (`#1D4ED8`) & Active Accent (`#2563EB`):** Dedicated to primary action triggers, current navigation items, active tab indicators, and confirmed states.
- **Slate Support (`#64748B`):** Employed for structural glyphs, secondary descriptive text, disabled borders, and column dividing rules.
- **Base Neutral (`#0F172A`):** Used for primary headings, body typography, and high-emphasis data points.
- **Tonal Canvas & Surfaces:**
  - Background Canvas: `#F8FAFC`
  - Card & Container Surface: `#FFFFFF`
  - Input & Recessed Background: `#F1F5F9`
  - Boundary Border & Wireframe Strokes: `#E2E8F0`
  - Hover & Muted Interactive States: `#EEF2F6`
- **Functional Semantics (Vietnamese Context):**
  - Success / Phê duyệt (Approved): `#059669` border and text with `#ECFDF5` container.
  - Warning / Đang xử lý (Pending/In Progress): `#D97706` border and text with `#FFFBEB` container.
  - Critical / Từ chối (Rejected/Error): `#DC2626` border and text with `#FEF2F2` container.

## Typography

The typography leverages `Inter` for its tall x-height, neutral tone, and superior support for diacritics in Vietnamese text (chữ Quốc ngữ). 

Rules for typographic execution:
- **Line Heights:** Set intentionally generous (`1.5x` - `1.6x` for body text) to accommodate stacked diacritics (e.g., `ổ`, `ễ`, `ặ`) without clipping or collisions with horizontal divider rules.
- **Headline Hierarchy:** Reserved for primary sections ("Thời khóa biểu", "Đăng ký tín chỉ", "Hồ sơ sinh viên"). Mobile breakpoints step down downsize gracefully to prevent headline truncation on standard 360–390px viewports.
- **Data Display:** Data values inside status tables and metadata key-value pairs should pair `label-md` or `label-sm` (uppercase or 600 weight) with `body-md` values for immediate scannability.

## Layout & Spacing

This design system uses an explicit 12-column responsive grid on desktop viewports and a single/double column structure on handheld devices.

- **Desktop (≥ 1200px):** 12 columns, max-width `1280px` centered, `gutter-md` (1.5rem), and `margin-lg` (3rem). Left navigation rails or administrative sidebars occupy 3 columns (or a fixed 260px container), with the main functional canvas occupying the remaining 9 columns.
- **Tablet (768px – 1199px):** 8 columns, `gutter` (1rem), and `margin-md` (2rem). Sidebars collapse into an off-canvas drawer or top horizontal pill bar.
- **Mobile (≤ 767px):** 4 columns or single stack, `gutter` (1rem), and `margin` (1rem). Dense components like grade tables transition into stacked cards.
- **Component Padding Scale:**
  - Micro tags, status dots, and badges: `space-xs` (0.25rem) to `space-sm` (0.5rem).
  - Form controls, table cells, and button interiors: `space-sm` vertical, `space-md` horizontal.
  - Cards, modal dialogues, and structured panels: `space-lg` (1.5rem) to `space-xl` (2rem).

## Elevation & Depth

To preserve the authentic wireframe and low-to-mid fidelity prototyping aesthetic, visual hierarchy avoids blur-heavy drop shadows. Instead, it relies on tonal layers, structural line contrast, and subtle border hierarchy.

- **Flat Wireframe Structural Borders:** The core architecture uses 1px solid borders (`#E2E8F0`) over surface layers (`#FFFFFF`) against the background canvas (`#F8FAFC`).
- **Surface Layering:**
  - Level 0 (Base Canvas): `#F8FAFC`
  - Level 1 (Card & Module Container): `#FFFFFF` with a 1px `#E2E8F0` border.
  - Level 2 (Recessed/Sub-panels): `#F1F5F9` inside a card container (e.g., student note callouts, code blocks, or preview fields).
  - Level 3 (Floating Overlays / Modals / Menus): `#FFFFFF` background with an intensified perimeter border (`1px solid #CBD5E1`) and a crisp, low-diffusion ambient shadow: `0 4px 12px rgba(15, 23, 42, 0.08)`.
- **Focus & States:** Interactive elements gain depth via a crisp 2px offset focus ring using `#2563EB` rather than heavy shadow diffusion.

## Shapes

The interface embraces a disciplined "Soft" corner geometry (`roundedness: 1`), conveying technical order, modular stability, and wireframe rigor.

- **Inputs, Buttons, and Cards:** Form elements and standard surfaces employ `rounded` (0.25rem / 4px) to `rounded-lg` (0.5rem / 8px). This prevents the UI from appearing overly playful while eliminating harsh, purely rectangular brutalist vertices.
- **Status Badges & Chips:** Badges and filtering tags use full pill contours (`rounded-full` / 9999px) to establish immediate shape-contrast against rectangular card containers and input boxes.
- **Dividers & Wireframe Markers:** Dividers are 1px continuous hairline strokes (`#E2E8F0`). Image and document placeholders use standard 4px rounded rectangles with an interior schematic crosshatch.

## Components

### Buttons (Nút tương tác)
- **Primary Button ("Nút chính"):** Background `#1D4ED8`, text `#FFFFFF`, border none, font weight 600. Hover `#2563EB`. Active `#1E40AF`.
- **Secondary Wireframe Button ("Nút phụ"):** Background `#FFFFFF`, text `#0F172A`, 1px border `#CBD5E1`. Hover `#F1F5F9` with border `#94A3B8`.
- **Ghost / Tertiary ("Nút văn bản"):** Background transparent, text `#64748B`. Hover background `#F1F5F9`, text `#0F172A`.
- **Button Sizing:** Standard height `40px` (padding: `0 16px`); compact height `32px` (padding: `0 12px`).

### Cards & Wireframe Containers (Thẻ thông tin & Khung bố cục)
- Clean `#FFFFFF` fill, 1px `#E2E8F0` perimeter border, `rounded-md` (6px).
- Optional card header: `space-md` padding separated by a 1px `#E2E8F0` bottom rule from the card body.
- Placeholder boxes use an `#F1F5F9` background with a subtle diagonal wireframe crosshair for unrendered content or avatar uploads.

### Status Badges & Pill Tags (Huy hiệu trạng thái & Thẻ phân loại)
- Pill-shaped (`rounded-full`), height `24px`, horizontal padding `10px`, font size `12px`, font weight 600.
- **Đã duyệt (Approved):** `#ECFDF5` background, `#047857` text, 1px border `#A7F3D0`.
- **Đang xử lý (In Progress / Pending):** `#FFFBEB` background, `#B45309` text, 1px border `#FDE68A`.
- **Cần bổ sung / Từ chối (Action Required / Rejected):** `#FEF2F2` background, `#B91C1C` text, 1px border `#FECACA`.
- **Mặc định / Nhãn khoa (Neutral Metadata):** `#F1F5F9` background, `#475569` text, 1px border `#E2E8F0`.

### Form Inputs & Selectors (Ô nhập liệu & Hộp chọn)
- Background `#FFFFFF`, 1px solid border `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`. Height `40px`, horizontal padding `12px`, corner radius `4px`.
- **Focus State:** 1px border `#1D4ED8` paired with a 2px outer outline `#DBEAFE`.
- **Error State:** 1px border `#DC2626`, accompanying helper note in `#DC2626` using `body-sm`.

### Checkboxes & Radio Buttons (Hộp kiểm & Nút chọn)
- 16px × 16px dimension, 1px `#CBD5E1` border, surface `#FFFFFF`.
- Checked state fills with `#1D4ED8` displaying a white check icon or centered dot.

### Tables & Data Lists (Bảng điểm & Danh sách dữ liệu)
- Dense layout with `36px` to `44px` row heights.
- Header row features `#F8FAFC` background, uppercase `label-sm` in `#64748B`, with a 1px solid bottom border (`#CBD5E1`).
- Alternating row option (zebra) using subtle `#FAFAFA` or clean borders between lines without zebra fills to keep the wireframe look pure.

### Student Portal Domain-Specific Components
- **Thẻ sinh viên tóm tắt (Student ID Strip):** Fixed horizontal header displaying avatar box placeholder (48x48px), Student Name, Mã số sinh viên (MSSV), Khoa/Viện, and Niên khóa with an active enrollment pill badge.
- **Bảng tiến độ học tập (Curriculum Progress Meter):** Thin linear track (8px height, `#E2E8F0` fill) with `#1D4ED8` progress fill, paired with percentage indicators and credit counters ("Số tín chỉ tích lũy: 92/130").