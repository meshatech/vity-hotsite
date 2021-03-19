import useWindowDimensions from '@/hooks/useWindowDimensions';
import {
  BackgroundImage,
  CompanyLogo,
  InputWrapper,
  PageContainer,
  PageContentWrapper,
  PageImage,
  PageTopContentWrapper,
} from '@/styles/home';

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <PageContainer>
      <BackgroundImage src="/imagem.png" layout="fill" />
      <CompanyLogo src="/logo.svg" height={84} width={126} />

      <PageContentWrapper>
        <PageTopContentWrapper>
          <h1>Seja um dos primeiros a saber</h1>
          <InputWrapper>
            <input type="text" placeholder="Seu melhor e-mail" />
            <button type="button">Ok</button>
          </InputWrapper>
        </PageTopContentWrapper>

        <PageImage src={width && width < 550 ? `/mobile.png` : `/web.svg`} />
      </PageContentWrapper>
    </PageContainer>
  );
}
