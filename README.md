# Timer Component

A simple countdown timer component in React that includes start, pause, and reset functionality. This component accepts a maximum countdown time of 59 minutes and 59 seconds.

## Features

- Displays a countdown timer with formatted minutes and seconds.
- Includes start, pause, and reset controls.
- Automatically stops and marks as complete when reaching the target time.
- When the timer ends, the circle background alternates between green and red colors.

## Props

### Timer Component Props
The `Timer` component accepts the following props:

| Prop          | Type     | Required | Description                                                                 |
|---------------|----------|----------|-----------------------------------------------------------------------------|
| `title`       | `string` | Yes      | The title of the timer, displayed as a label or heading.                    |
| `endTime`     | `number` | Yes      | Specifies the timer's target duration in seconds (max 59 minutes, 59 seconds). |
| `elapsedTime` | `number` | No       | The starting point of the timer (default is 0).                             |

### TimerButton Component Props
The `TimerButton` component is a helper for creating button controls (start, pause, reset) for the timer.

| Prop        | Type                 | Required | Description                                                               |
|-------------|----------------------|----------|---------------------------------------------------------------------------|
| `children`  | `React.ReactNode`    | Yes      | The content to display inside the button, such as text or icons.          |
| `onClick`   | `() => void`         | No       | Function to trigger when the button is clicked.                           |
| `disabled`  | `boolean`            | No       | Disables the button when `true` (default is `false`).                     |

## Usage

Here’s an example of how to use the `Timer` component:

```tsx
<Timer title={"My Timer"} endTime={152} elapsedTime={13} />
```

## Development
### Prerequisites
- bun (prefferably)
### Running Locally
- Clone the repository.
- Install dependencies with bun install
- Run the development server with bun dev.
