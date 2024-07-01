
export default function Loading() {
  return (
    <>
      <main>
        <section className="relative flex justify-center items-center py-14 md:py-20">
          <SVGSkeleton className="object-cover z-0 blur-3xl w-4 h-4" />
          <div className="z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row relative">
            <SVGSkeleton className="rounded-xl border-2 border-white/50 object-cover w-[300px] h-[201px]" />
            <div className="flex flex-col">
              <p>
                <Skeleton className="w-[152px] max-w-full" />
              </p>
              <h1 className="tracking-tight mb-2 mt-1">
                <Skeleton className="w-[168px] max-w-full" />
              </h1>
              <p>
                <Skeleton className="w-[256px] max-w-full" />
                <span>
                  <Skeleton className="w-[152px] max-w-full" />
                </span>
              </p>
              <div className="mt-5 lg:mt-auto w-[95vw] border-white/10 border-2 sm:w-full py-2">
                <Skeleton className="w-[88px] max-w-full" />
              </div>
            </div>
          </div>
        </section>
        <div className="min-h-[75vh] px-5 py-16">
          <section className="mb-12">
            <h2 className="mb-8">
              <Skeleton className="w-[128px] max-w-full" />
            </h2>
            <p className="max-w-4xl mx-auto leading-8">
              <Skeleton className="w-[1584px] max-w-full" />
            </p>
          </section>
          <section className="mb-12">
            <h2 className="mb-8">
              <Skeleton className="w-[64px] max-w-full" />
            </h2>
            <p className="max-w-4xl mx-auto leading-8">
              <Skeleton className="w-[136px] max-w-full" />
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
const Skeleton = ({ className }: { className: string }) => (
  <div aria-live="polite" aria-busy="true" className={className}>
    <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
      ‌
    </span>
    <br />
  </div>
);

const SVGSkeleton = ({ className }: { className: string }) => (
  <svg className={className + " animate-pulse rounded bg-gray-300"} />
);
