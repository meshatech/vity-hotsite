import useMedia from '@/hooks/media';
import {
  PageBackground,
  CompanyLogo,
  InputWrapper,
  PageContainer,
  PageContentWrapper,
  PageImage,
  PageTopContentWrapper,
} from '@/styles/home';
import { useCallback } from 'react';

export default function Home() {
  const mobile = useMedia(`(max-width: 550px)`);

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
    <PageBackground>
      <PageContainer>
        <header>
          <CompanyLogo src="/logo.svg" height={84} width={126} />
        </header>

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
          <PageImage src={mobile ? `/mobile.svg` : `/web.svg`} />
        </PageContentWrapper>
      </PageContainer>
    </PageBackground>
  );
}
