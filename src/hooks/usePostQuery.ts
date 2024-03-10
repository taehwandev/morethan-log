import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { queryKey } from "src/constants/queryKey"
import { PostDetail } from "src/types"

const usePostQuery = () => {
  const router = useRouter()
  const { slug } = router.query

 // slug가 정의되지 않았을 때 예외처리
  if (!slug) {
    return null;
  }

  const slugs = slug.split('/');
  if (slugs.length > 1) {
    const newSlug = slugs[slugs.length - 1];
    router.push(newSlug);
  }

  const { data } = useQuery<PostDetail>({
    queryKey: queryKey.post(`${slug}`),
    enabled: false,
  })

  return data
}

export default usePostQuery
