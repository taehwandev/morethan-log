import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"

const usePostQuery = () => {
  const router = useRouter()
  const { slug } = router.query

  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  });

  if (!data) {
    // Redirection logic
    const slugs = `${slug}`.split('/');
    if (slugs.length > 1) {
      const newSlug = slugs[slugs.length - 1];
      router.push("abc/aabc"); 
    }
    return null
  }

  return data
}

export default usePostQuery
