# Evently - Organizer Dashboard

This project contains the generated code from the Figma design for the Evently event management platform.

## Design Source

- **Figma File**: [Design](https://www.figma.com/design/mWz6ag0xua8b2scuYm7BvY/Design?node-id=23-36&m=dev)
- **Node ID**: 23-36
- **Component**: Landing (Organizer Dashboard)

## Generated Files

- `Landing.tsx` - Main landing page component with sidebar navigation and dashboard content

## Component Structure

### Landing Component
The main organizer dashboard page featuring:

1. **Sidebar** (Fixed left, 288px width)
   - Evently branding header
   - Navigation menu with "Events" link
   - User profile section at bottom

2. **Main Content Area**
   - Welcome greeting ("Hello, Mihir")
   - Two action cards:
     - Create Event with AI
     - Create Event manually
   - Events section with empty state

## Styling

The component uses Tailwind CSS classes with the following design tokens:

### Colors
- Primary text: `#0f172b`
- Secondary text: `#62748e`
- Background: `white`
- Card background: `#efefef`
- Button background: `#4d4d4d`
- User profile gradient: `linear-gradient(135deg, #cad5e2 0%, #90a1b9 100%)`

### Typography
- **Fonts**: Inter (headings, navigation), SF Pro (content)
- **Sizes**: 48px (main heading), 24px (section titles), 16px (body), 14px (small text), 12px (labels)

### Shadows
- Sidebar: `0px 1px 3px 0px rgba(0,0,0,0.1), 0px 1px 2px -1px rgba(0,0,0,0.1)`
- Buttons: `0px 1px 2px 0px rgba(0,0,0,0.05), 0px 0.5px 1px 0px rgba(0,0,0,0.02)`

### Border Radius
- Cards: 14px
- Navigation items: 16px
- Buttons: 20px
- User avatar: Full circle

## Assets

The icon image is hosted at:
```
https://www.figma.com/api/mcp/asset/79580c89-d89c-416f-8435-7f95f9414145
```

**Note**: Image assets expire after 7 days and will need to be re-fetched from Figma.

## Usage

```tsx
import Landing from './Landing';

function App() {
  return <Landing />;
}
```

## Next Steps

To make this component production-ready:

1. **Install dependencies**:
   ```bash
   npm install react
   # If using Tailwind CSS
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Convert to component-based architecture**:
   - Extract Sidebar as a separate component
   - Create reusable Button component
   - Create Card component for event creation options
   - Create EmptyState component

3. **Add interactivity**:
   - Implement navigation routing
   - Add click handlers for Create buttons
   - Add user profile dropdown
   - Implement event creation flows

4. **Replace hardcoded data**:
   - Make user name dynamic
   - Connect to backend API
   - Add state management (Redux, Zustand, etc.)

5. **Responsive design**:
   - Add mobile breakpoints
   - Implement collapsible sidebar
   - Adjust layout for tablets and mobile devices

6. **Accessibility**:
   - Add ARIA labels
   - Ensure keyboard navigation
   - Add focus states
   - Improve semantic HTML

7. **Download and host assets locally**:
   - Download the icon image before it expires
   - Store in your project's assets folder
   - Update the import path

## Design System Notes

The design uses a consistent spacing system and follows modern UI/UX patterns:
- Clean, minimal interface
- Clear visual hierarchy
- Generous whitespace
- Soft shadows for depth
- Rounded corners for modern feel
