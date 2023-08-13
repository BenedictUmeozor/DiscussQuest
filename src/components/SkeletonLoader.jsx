import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function EditProfileLoader() {
  return (
    <div>
      <Skeleton width={"100%"} height={400} count={1} />
    </div>
  );
}

export function AnswersLoader() {
  return (
    <div className="mt-4">
      <div className="mb-3">
        <Skeleton count={1} width={"100%"} height={150} />
      </div>
      <div className="mb-3">
        <Skeleton count={1} width={"100%"} height={150} />
      </div>
      <div className="mb-3">
        <Skeleton count={1} width={"100%"} height={150} />
      </div>
    </div>
  );
}

export function QuestionLoader() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-8 w-8 rounded-full overflow-hidden">
          <Skeleton count={1} width={"100%"} height={"100%"} />
        </div>
        <p>
          <Skeleton height={25} width={100} />
        </p>
      </div>
      <p className="mb-2">
        <Skeleton height={22} width={200} />
      </p>
      <p className="mb-3">
        <Skeleton width={250} height={30} count={1} />
      </p>
      <div>
        <Skeleton count={3} />
      </div>
    </div>
  );
}

export function ProfileLoader() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div>
        <Skeleton count={1} width={130} height={30} />
        <div className="rounded-full my-4 overflow-hidden h-32 w-32">
          <Skeleton height={"100%"} width={"100%"} />
        </div>
        <div>
          <div className="mb-2">
            <p>
              <Skeleton count={1} width={80} height={30} />
            </p>
            <p>
              <Skeleton count={1} width={190} height={30} />
            </p>
          </div>
          <div className="mb-2">
            <p>
              <Skeleton count={1} width={80} height={30} />
            </p>
            <p>
              <Skeleton count={1} width={190} height={30} />
            </p>
          </div>
          <div className="mb-2">
            <p>
              <Skeleton count={1} width={80} height={30} />
            </p>
            <p>
              <Skeleton count={1} width={190} height={30} />
            </p>
          </div>
        </div>
      </div>

      <div>
        <Skeleton count={1} width={130} height={30} />
        <div>
          <div className="mb-3">
            <Skeleton count={1} width={"100%"} height={150} />
          </div>
          <div className="mb-3">
            <Skeleton count={1} width={"100%"} height={150} />
          </div>
          <div className="mb-3">
            <Skeleton count={1} width={"100%"} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndexLoader() {
  return (
    <>
      <div className="hidden md:block">
        <div className="flex items-center flex-wrap gap-5 my-6">
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
        </div>
        <div className="flex items-center flex-wrap gap-5 my-6">
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
        </div>
        <div className="flex items-center flex-wrap gap-5 my-6">
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
        </div>
        <div className="flex items-center flex-wrap gap-5 my-6">
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
          <Skeleton
            containerClassName="flex-1"
            height={200}
            borderRadius={"0.25rem"}
          />
        </div>
      </div>

      <div className="md:hidden my-6">
        <div className="mb-4">
          <Skeleton height={200} borderRadius={"0.25rem"} />
        </div>
        <div className="mb-4">
          <Skeleton height={200} borderRadius={"0.25rem"} />
        </div>
        <div className="mb-4">
          <Skeleton height={200} borderRadius={"0.25rem"} />
        </div>
        <div className="mb-4">
          <Skeleton height={200} borderRadius={"0.25rem"} />
        </div>
      </div>
    </>
  );
}
