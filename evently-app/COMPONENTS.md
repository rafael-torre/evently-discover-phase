# Evently Components Documentation

## Component Architecture

The application has been refactored into reusable, modular components following React best practices. Components are shared across multiple pages for consistency and maintainability.

## Pages

### 1. **Landing** (`src/components/Landing.tsx`)

The main dashboard page showing welcome message and event creation options.

**Features:**
- Welcome header with user name
- Two action cards for event creation (AI and Manual)
- Events section with empty state
- Navigation to CreateWithAI page

**Route:** `/`

---

### 2. **CreateWithAI** (`src/components/CreateWithAI.tsx`)

Template selection page for AI-powered event creation.

**Features:**
- Page header with subtitle
- Grid of template cards (3 columns)
- Reuses Sidebar component
- Template selection handlers
- Navigation to EventSetup for "Create Event Setup" templates

**Route:** `/create-with-ai`

---

### 3. **EventSetup** (`src/components/EventSetup.tsx`)

Event name input form - first step in event creation flow.

**Features:**
- Centered form layout
- Large heading with friendly copy
- Event name input field
- Primary action button (Create)
- Skip option link
- Reuses Sidebar, Button, and Input components

**Route:** `/event-setup`

---

## Shared Components

### 1. **Button** (`src/components/Button.tsx`)

A reusable button component with variants and hover effects.

**Props:**
- `children: React.ReactNode` - Button content
- `onClick?: () => void` - Click handler
- `variant?: 'primary' | 'secondary'` - Button style variant (default: 'primary')
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
import Button from './components/Button';

<Button onClick={handleClick} variant="primary">
  Create
</Button>
```

**Features:**
- Hover effects with opacity transition
- Primary variant: Dark background with white text
- Secondary variant: Light background with dark text
- Consistent rounded corners and padding
- Supports custom className for width/height overrides

**Used in:** Card, TemplateCard, EventSetup

---

### 2. **Input** (`src/components/Input.tsx`)

A reusable input field component for forms.

**Props:**
- `placeholder?: string` - Input placeholder text
- `value?: string` - Controlled input value
- `onChange?: (value: string) => void` - Change handler
- `type?: 'text' | 'email' | 'password' | 'number'` - Input type (default: 'text')
- `className?: string` - Additional CSS classes

**Usage:**
```tsx
import Input from './components/Input';

<Input
  placeholder="Event name"
  value={eventName}
  onChange={setEventName}
/>
```

**Features:**
- Rounded corners (16px)
- Border with focus state
- Custom font styling
- Placeholder styling
- Full width by default
- Smooth transitions

**Used in:** EventSetup

---

### 3. **Card** (`src/components/Card.tsx`)

A card component for displaying action items with a title and button.

**Props:**
- `title: string` - Card title text
- `onAction?: () => void` - Action button click handler
- `actionLabel?: string` - Button label (default: 'Create')

**Usage:**
```tsx
import Card from './components/Card';

<Card
  title="Create Event with AI"
  onAction={handleCreateWithAI}
  actionLabel="Create"
/>
```

**Features:**
- Fixed height (132px) for consistency
- Flexible width (flex-1)
- Button positioned at bottom right
- Light gray background with rounded corners

**Used in:** Landing page

---

### 4. **TemplateCard** (`src/components/TemplateCard.tsx`)

A detailed card component for displaying AI template options.

**Props:**
- `title: string` - Template title
- `description: string` - Template description text
- `imagePlaceholder?: boolean` - Show image placeholder (default: true)
- `onAction?: () => void` - Action button click handler
- `actionLabel?: string` - Button label (default: 'Create')

**Usage:**
```tsx
import TemplateCard from './components/TemplateCard';

<TemplateCard
  title="Create Event Setup"
  description="Lorem ipsum dolor sit amet..."
  onAction={() => handleTemplateSelect(1)}
  actionLabel="Create"
/>
```

**Features:**
- Flexible width (w-full, fills grid cell)
- Fixed height (337px)
- Image placeholder area
- Title and description sections
- Action button at bottom
- White background with border

**Used in:** CreateWithAI page

---

### 5. **EmptyState** (`src/components/EmptyState.tsx`)

A component to display when there's no content available.

**Props:**
- `message?: string` - Empty state message (default: "No fun events created yet...")
- `icon?: string` - Icon/emoji to display (default: ":'(")

**Usage:**
```tsx
import EmptyState from './components/EmptyState';

<EmptyState
  icon=":'("
  message="No fun events created yet..."
/>
```

**Features:**
- Centered content layout
- Large icon display
- Customizable message
- Light gray background with rounded corners

**Used in:** Landing page

---

### 6. **Sidebar** (`src/components/Sidebar.tsx`)

A full-height sidebar with navigation and user profile. Now includes routing support.

**Props:**
- `userName?: string` - User's display name (default: "Mihir")
- `userInitials?: string` - User's initials for avatar (default: "MP")

**Usage:**
```tsx
import Sidebar from './components/Sidebar';

<Sidebar userName="Mihir" userInitials="MP" />
```

**Features:**
- Fixed width (288px)
- Full height with flexbox layout
- Branding header at top (clickable, navigates to home)
- Navigation menu in middle with active state
- User profile fixed at bottom
- Gradient avatar background
- Hover effects on navigation items
- Shadow for depth
- React Router integration

**Structure:**
- Header: Evently branding + subtitle (clickable)
- Navigation: Event Management section with active state
- User Profile: Avatar + name (fixed at bottom)

**Used in:** All pages

---

## Routing

The application uses **React Router v6** for navigation.

### Routes:
- `/` - Landing page (dashboard)
- `/create-with-ai` - AI template selection page
- `/event-setup` - Event name input form

### Navigation Flow:
```
Landing (/)
├── "Create Event with AI" → CreateWithAI (/create-with-ai)
│   └── "Create Event Setup" templates → EventSetup (/event-setup)
├── "Create Event manually" → (Console log)
└── Sidebar "Events" → Landing (/)

CreateWithAI (/create-with-ai)
├── Template cards (ID 1, 4) → EventSetup (/event-setup)
├── Other template cards → (Console log)
├── Sidebar "Events" → Landing (/)
└── Evently logo → Landing (/)

EventSetup (/event-setup)
├── "Create" button → (Console log, TODO: next step)
├── "Choose name later" → (Console log, TODO: next step)
├── Sidebar "Events" → Landing (/)
└── Evently logo → Landing (/)
```

---

## Layout Structure

### Screen Layout
- **Flexbox container**: Full screen height and width
- **Sidebar**: Fixed width (288px), full height
- **Main content**: Flexible width, scrollable or centered

### Layout Patterns:

1. **Dashboard Layout** (Landing, CreateWithAI)
   - Sidebar + scrollable content area
   - Content padded with max-width constraints

2. **Centered Form Layout** (EventSetup)
   - Sidebar + centered content
   - Fixed width form (440px)
   - Vertically and horizontally centered

### Responsive Behavior
- Main content scrolls vertically when needed
- Sidebar remains fixed
- User profile always visible at bottom of sidebar
- Template grid: 3 columns fixed
- Forms maintain fixed width for better UX

---

## Styling Approach

### Tailwind CSS Classes
All components use Tailwind CSS utility classes for styling:
- Consistent spacing with bracket notation (e.g., `h-[132px]`)
- Custom colors using hex values (e.g., `bg-[#efefef]`)
- Font families with fallbacks
- Shadow effects for depth
- Rounded corners for modern look
- Responsive grid system
- Transition effects for interactivity

### Typography
- **Inter**: Used for branding, navigation, and UI text
- **SF Pro**: Used for buttons and content text
- **Rethink Sans**: Used for form headings and inputs
- Consistent font sizes and weights across components

### Color Palette
- Primary text: `#0f172b`, `black`
- Secondary text: `#62748e`, `#4f4f4f`, `rgba(0,0,0,0.5)`, `rgba(0,0,0,0.8)`
- Background: `white`, `#efefef`, `#f8fafc`
- Button: `#4d4d4d`
- Border: `#e0e0e0`, `rgba(0,0,0,0.15)`
- Gradient: `linear-gradient(135deg, #cad5e2 0%, #90a1b9 100%)`

---

## Component Reusability

### Shared Components:
- ✅ **Button** - Used in Card, TemplateCard, EventSetup
- ✅ **Input** - Used in EventSetup
- ✅ **Sidebar** - Used in Landing, CreateWithAI, EventSetup
- ✅ **Card** - Used in Landing
- ✅ **TemplateCard** - Used in CreateWithAI
- ✅ **EmptyState** - Used in Landing

### Design Patterns:
1. **Composition**: Components are composed together
2. **Props interface**: TypeScript interfaces for type safety
3. **Default props**: Sensible defaults for optional props
4. **Event handlers**: Consistent onClick/onChange patterns
5. **Responsive design**: Grid and flexbox layouts
6. **Controlled components**: Form inputs use controlled state

---

## File Structure

```
src/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Input.tsx           # Reusable input field component
│   ├── Card.tsx            # Action card component
│   ├── TemplateCard.tsx    # Template selection card
│   ├── EmptyState.tsx      # Empty state display
│   ├── Sidebar.tsx         # Navigation sidebar with routing
│   ├── Landing.tsx         # Main dashboard page
│   ├── CreateWithAI.tsx    # AI template selection page
│   └── EventSetup.tsx      # Event name input form
├── App.tsx                 # Root component with routing
├── App.css                 # Global app styles
├── index.css               # Tailwind imports
└── main.tsx                # Entry point
```

---

## Development

### Running the Application
```bash
cd evently-app
npm run dev
```

The app will be available at `http://localhost:5174/`

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

---

## Future Enhancements

### Recommended Improvements:
1. ✅ **Routing** - Added React Router
2. ✅ **Form components** - Added Input component
3. **State management** - Add Redux/Zustand for global state
4. **API integration** - Connect to backend services
5. **Form validation** - Add validation to Input component
6. **Event list** - Display actual events when available
7. **Loading states** - Add skeleton loaders
8. **Error handling** - Add error boundaries and messages
9. **Responsive design** - Enhance mobile experience
10. **Accessibility** - Add ARIA labels and keyboard navigation
11. **Testing** - Add unit and integration tests
12. **Authentication** - Add user login/logout
13. **Multi-step forms** - Complete event creation flow
14. **Toast notifications** - Add success/error messages
15. **Form persistence** - Save draft events

---

## Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.1.3",
  "@tailwindcss/postcss": "^4.1.18",
  "tailwindcss": "^4.1.18"
}
```
