import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import Script from 'next/script'

type Props = {}

const CustomError: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <Script id="redirect">
        {`const currentUrl = window.location.href; const removeHtml = currentUrl.replace(".html", ""); const urlObj = new URL(currentUrl); const domain = urlObj.origin;const path = urlObj.pathname.split('/');if (path.length > 1) {const lastUrl = path[path.length - 1]window.location.replace(\"${domain}/${lastUrl}\")};`}
    </Script>
      <div className="wrapper">
        <div className="top">
          <div>4</div>
          <Emoji>🤔</Emoji>
          <div>4</div>
        </div>
        <div className="text">Post not found</div>
      </div>
    </StyledWrapper>
  )
}

export default CustomError

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  .wrapper {
    display: flex;
    padding-top: 5rem;
    padding-bottom: 5rem;
    flex-direction: column;
    gap: 2.5rem;
    align-items: center;
    > .top {
      display: flex;
      align-items: center;
      font-size: 3.75rem;
      line-height: 1;
    }
    > .text {
      font-size: 1.875rem;
      line-height: 2.25rem;
      color: ${({ theme }) => theme.colors.gray11};
    }
  }
`
