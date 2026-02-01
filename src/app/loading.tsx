export default function Loading() {
	return (
		<div className="mx-auto max-w-6xl px-4 py-16">
			<div className="space-y-6">
				<div className="h-10 w-72 rounded-xl skeleton" />
				<div className="h-5 w-[520px] max-w-full rounded-lg skeleton" />
				<div className="grid gap-4 sm:grid-cols-2">
					<div className="h-40 rounded-2xl border border-line bg-white p-6">
						<div className="h-6 w-40 rounded-lg skeleton" />
						<div className="mt-4 h-4 w-full rounded-lg skeleton" />
						<div className="mt-2 h-4 w-11/12 rounded-lg skeleton" />
					</div>
					<div className="h-40 rounded-2xl border border-line bg-white p-6">
						<div className="h-6 w-40 rounded-lg skeleton" />
						<div className="mt-4 h-4 w-full rounded-lg skeleton" />
						<div className="mt-2 h-4 w-10/12 rounded-lg skeleton" />
					</div>
				</div>
			</div>
		</div>
	);
}
