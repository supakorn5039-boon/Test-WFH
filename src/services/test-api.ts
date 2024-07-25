import { Test } from "@/types/API";
import { useQuery } from "@tanstack/react-query";

export function TestApi() {
  const { data: TestApiData, isLoading: APILOADING } = useQuery<Test[]>({
    queryKey: ["test-data"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://test-api-py77dwlbxa-df.a.run.app/data`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const info = await res.json();
        return info;
      } catch (error) {
        throw new Error((error as Error).message);
      }
    },
  });
  return { TestApiData, APILOADING };
}
