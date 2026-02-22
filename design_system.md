# SteinStudy Design System (Updated based on diz.png)

## 1. Color Palette
- **Primary Gradient:** `linear-gradient(90deg, #4F46E5, #3B82F6)` - Header and primary accents.
- **Backgrounds:**
  - Sidebar: `#F8FAFC` (Light Grey/Blue tint).
  - Main Workspace: `#FFFFFF` (Pure White).
  - Cards: Gradient and solid fills (Violet: `#818CF8`, Orange: `#FB923C`, Blue: `#6366F1`).
- **Text:**
  - Headings: `#1E293B` (Slate-900).
  - Body: `#475569` (Slate-600).
- **Accents:**
  - Progress Tracking: `#B4B8D7` (Background) / `#6366F1` (Fill).
  - Success: `#10B981` (Emerald).
  - Warning: `#F59E0B` (Amber).

## 2. Typography
- **Primary Font:** `Inter`, `system-ui`.
- **Sizes:**
  - Page Title: 28px, Bold.
  - Sidebar Headers: 16px, Semi-bold.
  - Card Text: 14px.
  - Navigation Buttons: 16px, Medium.

## 3. UI Components (Tailwind/React)
### 3.1. Navigation Header
- `bg-gradient-to-r from-[#4F46E5] to-[#3B82F6] text-white p-4 flex justify-between items-center shadow-md`
- Icons: Search, Notifications, Profile (Rounded-full).

### 3.2. Sidebar (Progress & Units)
- `w-72 bg-[#F8FAFC] border-r border-slate-200 p-6 flex flex-col gap-8`
- **Unit Item:** `flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm cursor-pointer`
- **Checkbox:** `w-5 h-5 rounded border-slate-300 text-indigo-600`

### 3.3. Main Content Area
- **Page Header:** Displays "Unit [N]: [Title]" and "[Page] of [Total]".
- **Card Grid:** `grid grid-cols-1 md:grid-cols-3 gap-6 my-6`.
- **Action Cards:** Large icons, bold titles, and high-contrast buttons (`bg-[#4C51BF]` for primary actions).

### 3.4. Footer Navigation
- `flex justify-between items-center border-t border-slate-100 p-6 bg-white sticky bottom-0`
- **Next Button:** `bg-[#4C51BF] hover:bg-slate-700 text-white px-6 py-2 rounded-md flex items-center gap-2`
- **Prev Button:** `border border-slate-200 text-slate-600 px-6 py-2 rounded-md hover:bg-slate-50`

## 4. Layout
- Fixed Sidebar on the left.
- Scrollable Main content.
- Progress bar persistent at the bottom for global tracking.
