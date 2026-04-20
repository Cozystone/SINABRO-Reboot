import Image from "next/image";
import Link from "next/link";
import { AppFrame } from "@/components/app-frame";
import { StatusBar } from "@/components/status-bar";
import { KakaoIcon, NaverIcon, AppleIcon } from "@/components/icons";

const poem = [
  "비가 올 것 같아.",
  "너는 소리 내어 중얼거린다.",
  "정말 비가 쏟아지면 어떡하지",
  "너는 눈을 가늘게 뜨고",
  "도청 앞 은행나무들을 지켜본다",
  "흔들리는 가지 사이로 불쑥",
  "바람의 형상이 드러나기라도 할 것처럼.",
  "공기 틈에 숨어 있던 빗방울들이",
  "일제히 튕겨져나와,",
  "투명한 보석들같이 허공에 떠서",
  "반짝이기라도 할 것처럼",
  "너는 눈을 크게 떠본다.",
];

export default function IntroPage() {
  return (
    <AppFrame dark>
      <div className="screen screen--dark">
        <StatusBar dark />

        <div className="intro-poem" aria-hidden="true">
          {poem.map((l) => <p key={l}>{l}</p>)}
        </div>

        <div className="intro-body">
          <div className="intro-logo">
            <Image src="/sinabro_logo_white.svg" alt="SINABRO" width={136} height={29} priority />
          </div>
          <h1 className="intro-h1">
            일상에<br />
            스며-드는<br />
            문학.
          </h1>
        </div>

        <div className="intro-actions">
          {/* 소셜 로그인 */}
          <Link href="/feed" className="btn-social btn-social--kakao">
            <KakaoIcon /> 카카오 계정으로 로그인
          </Link>
          <Link href="/feed" className="btn-social btn-social--naver">
            <NaverIcon /> 네이버 계정으로 로그인
          </Link>

          <div className="intro-or">또는</div>

          {/* 이메일 로그인 / 회원가입 */}
          <div className="intro-auth">
            <Link href="/feed" className="btn-auth btn-auth--login">로그인</Link>
            <Link href="/feed" className="btn-auth btn-auth--signup">회원가입하기</Link>
          </div>
        </div>
      </div>
    </AppFrame>
  );
}
