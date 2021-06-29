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
import { useCallback } from 'react';

export default function Home() {
  const { width } = useWindowDimensions();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(`https://somosmesha.activehosted.com/proc.php`, {
      method: `POST`,
      body: data,
      mode: `no-cors`,
    })
      .then((response) => {
        console.log(response);
        alert(`Cadastro Realizado com sucesso!`);
      })
      .catch((error) => console.log(`Request failed`, error));
  }, []);

  return (
    <PageContainer>
      <BackgroundImage src="/imagem.png" layout="fill" />
      <CompanyLogo src="/logo.svg" height={84} width={126} />

      <PageContentWrapper>
        <PageTopContentWrapper>
          <h1>Seja um dos primeiros a saber</h1>
          <InputWrapper>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="u" value="9" />
              <input type="hidden" name="f" value="9" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Seu melhor e-mail"
              />
              <button id="_form_9_submit" type="submit">
                Ok
              </button>
            </form>
          </InputWrapper>
        </PageTopContentWrapper>

        <PageImage src={width && width < 550 ? `/mobile.png` : `/web.svg`} />
      </PageContentWrapper>
    </PageContainer>
  );
}
