import Link from "next/link";

interface Content {
  startDate: string;
  endDate?: string;
  title: string;
  location?: string;
  description: string;
  additional?: string;
  url?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function TimeLine({ contentList }: { contentList: Content[] }) {
  return (
    <>
      <ul role="list" className="space-y-6">
        {contentList.map((content, idx) => (
          <li key={idx} className="relative flex gap-x-4">
            <div
              className={classNames(
                idx === contentList.length - 1 ? "h-6" : "-bottom-6",
                "absolute left-0 top-0 flex w-6 justify-center ms-14"
              )}
            >
              <div className="w-px bg-gray-200" />
            </div>
            <>
              <div className="w-20 flex">
                <div className="flex-none text-right py-0.5 text-xs leading-5 text-gray-400 w-14 pe-0.5">
                  <div>{content.startDate}</div>
                  <div>{`${content.endDate ?? ""}`}</div>
                </div>

                <div className="relative flex h-6 w-6 flex-none items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                </div>
              </div>

              <>
                <div className="flex-auto ">
                  <div className="flex justify-between gap-x-4">
                    <div className="py-0.5 leading-5 text-gray-400">
                      <span className="text-md text-gray-900 dark:text-gray-200">
                        {content.title}
                      </span>
                      <span className="text-sm ms-2  dark:text-gray-500">
                        {content.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-6 text-gray-800 dark:text-gray-400">
                    {content.description}
                  </p>
                  {content.url ? (
                    <Link href={content.url}>
                      <div className="text-xs underline text-gray-700 dark:text-gray-400">
                        {content.additional}
                      </div>
                    </Link>
                  ) : (
                    <div className="text-xs text-gray-700 dark:text-gray-400">
                      {content.additional}
                    </div>
                  )}
                </div>
              </>
            </>
          </li>
        ))}
      </ul>
    </>
  );
}
