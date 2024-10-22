"use client";

import { useEffect, useRef, useState } from "react";

interface TimerProps {
	title: string;
	endTime: number;
	elapsedTime?: number;
}

const TimerButton = ({
	children,
	onClick,
	disabled = false,
}: Readonly<{
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}>) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className="rounded-component p-2 border-2 border-button-outline text-xl w-24 disabled:opacity-50 disabled:cursor-not-allowed"
		>
			{children}
		</button>
	);
};

const Timer = ({ title, endTime, elapsedTime = 0 }: TimerProps) => {
	if (endTime > 3599) {
		throw new Error("Timer cannot exceed 59 minutes and 59 seconds");
	}

	const [time, setTime] = useState(elapsedTime);
	const [isRunning, setIsRunning] = useState(false);
	const [isCompleted, setIsCompleted] = useState(false);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (isRunning && time < endTime) {
			intervalRef.current = setInterval(() => {
				setTime((time) => {
					if (time + 1 >= endTime) {
						clearInterval(intervalRef.current!);
						setIsRunning(false);
						setIsCompleted(true);
						return endTime;
					}
					return time + 1;
				});
			}, 1000);
		}
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [isRunning, time, endTime]);

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;

		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	};

	const handleStart = () => {
		setIsRunning(true);
	};

	const handlePause = () => {
		setIsRunning(false);
	};

	const handleReset = () => {
		setTime(0);
		setIsRunning(false);
		setIsCompleted(false);
	};

	const dasharray = 2 * Math.PI * 45;

	// This ensures that the transition can finish in sync with the timer
	const transitionEndTime = endTime - 1;
	const transitionTime = Math.min(transitionEndTime, time);

	const progress = (dasharray * transitionTime) / transitionEndTime;

	return (
		<div className="w-1/5 h-1/2 min-w-96 bg-component-bg flex flex-col justify-center items-center rounded-component p-4">
			<div className="relative w-full flex flex-col">
				<div className="flex flex-col justify-center items-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<h1 className="text-timer-text text-xl">{title}</h1>
					<h1 className="text-timer text-5xl">{formatTime(time)}</h1>
					<h1 className="text-timer-text text-xl">{`${formatTime(
						endTime - time
					)} left`}</h1>
				</div>
				<svg
					className="w-full h-full mb-4"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g>
						<circle
							className="stroke-circle-bg stroke-2 fill-none"
							cx="50"
							cy="50"
							r="45"
						/>
						<circle
							className={`stroke-circle-progress-bg stroke-2 fill-none origin-center -rotate-90 transition-all ease-linear duration-1000 delay-0 ${
								isCompleted && "animate-finished"
							}`}
							cx="50"
							cy="50"
							r="45"
							strokeDasharray={dasharray}
							strokeDashoffset={dasharray - progress}
						/>
					</g>
				</svg>
			</div>
			<div className="flex gap-12">
				<TimerButton
					disabled={isRunning || isCompleted}
					onClick={handleStart}
				>
					Start
				</TimerButton>
				<TimerButton
					disabled={!isRunning || isCompleted}
					onClick={handlePause}
				>
					Pause
				</TimerButton>
				<TimerButton onClick={handleReset}>Reset</TimerButton>
			</div>
		</div>
	);
};
export default Timer;
