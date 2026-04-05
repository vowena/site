export function StellarLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg viewBox="0 0 24 24" width="22" height="22" y="3">
        <path fill="currentColor" d="M12.283 1.851A10.154 10.154 0 001.846 12.002c0 .259.01.516.03.773A1.847 1.847 0 01.872 14.56L0 15.005v2.074l2.568-1.309.832-.424.82-.417 14.71-7.496 1.653-.842L24 4.85V2.776l-3.387 1.728-2.89 1.473-13.955 7.108a8.376 8.376 0 01-.07-1.086 8.313 8.313 0 0112.366-7.247l1.654-.843.247-.126a10.154 10.154 0 00-5.682-1.932zM24 6.925L5.055 16.571l-1.653.844L0 19.15v2.072L3.378 19.5l2.89-1.473 13.97-7.117a8.474 8.474 0 01.07 1.092A8.313 8.313 0 017.93 19.248l-.101.054-1.793.914a10.154 10.154 0 0016.119-8.214c0-.26-.01-.522-.03-.78a1.848 1.848 0 011.003-1.785L24 8.992Z"/>
      </svg>
      <text x="28" y="19" fill="currentColor" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Stellar</text>
    </svg>
  );
}

export function USDCLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="12" stroke="#2775CA" strokeWidth="2" fill="none"/>
      <text x="13.5" y="18.5" fill="#2775CA" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="700" textAnchor="middle">$</text>
      <text x="32" y="19" fill="#2775CA" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="700">USDC</text>
    </svg>
  );
}

export function CircleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg viewBox="0 0 24 24" width="20" height="20" y="4" x="0">
        <path fill="#00D395" d="M20.788 3.832c-.101-.105-.197-.213-.301-.317-.103-.103-.211-.202-.32-.302A11.903 11.903 0 0 0 12 0a11.926 11.926 0 0 0-8.486 3.514C-1.062 8.09-1.16 15.47 3.213 20.168c.099.108.197.214.3.32.104.103.21.2.317.3A11.92 11.92 0 0 0 12 24c3.206 0 6.22-1.247 8.487-3.512 4.576-4.576 4.673-11.956.301-16.656zm-16.655.301A11.057 11.057 0 0 1 12 .874c2.825 0 5.49 1.048 7.55 2.958l-1.001 1.002A9.646 9.646 0 0 0 12 2.292a9.644 9.644 0 0 0-6.865 2.844A9.644 9.644 0 0 0 2.292 12c0 2.448.9 4.753 2.542 6.549L3.831 19.55C-.201 15.191-.101 8.367 4.133 4.133zm13.798 1.318v.002l-1.015 1.014A7.346 7.346 0 0 0 12 4.589 7.357 7.357 0 0 0 6.761 6.76 7.362 7.362 0 0 0 4.589 12a7.34 7.34 0 0 0 1.877 4.913l-1.014 1.016A8.77 8.77 0 0 1 3.167 12a8.77 8.77 0 0 1 2.588-6.245A8.771 8.771 0 0 1 12 3.167c2.213 0 4.301.809 5.931 2.284zM18.537 12c0 1.745-.681 3.387-1.916 4.622S13.746 18.538 12 18.538a6.491 6.491 0 0 1-4.296-1.621l-.001-.004c-.11-.094-.22-.188-.324-.291a6.027 6.027 0 0 1-.293-.326A6.47 6.47 0 0 1 5.466 12c0-1.746.679-3.387 1.914-4.621A6.488 6.488 0 0 1 12 5.465c1.599 0 3.105.576 4.295 1.62.111.096.224.19.326.295.104.104.2.214.295.324A6.482 6.482 0 0 1 18.537 12zM7.084 17.534h.001A7.349 7.349 0 0 0 12 19.413a7.35 7.35 0 0 0 5.239-2.174A7.354 7.354 0 0 0 19.412 12a7.364 7.364 0 0 0-1.876-4.916l1.013-1.012A8.777 8.777 0 0 1 20.834 12a8.765 8.765 0 0 1-2.589 6.246A8.764 8.764 0 0 1 12 20.834a8.782 8.782 0 0 1-5.93-2.285l1.014-1.015zm12.783 2.333A11.046 11.046 0 0 1 12 23.125a11.042 11.042 0 0 1-7.551-2.957l1.004-1.001a9.64 9.64 0 0 0 6.549 2.542 9.639 9.639 0 0 0 6.865-2.846A9.642 9.642 0 0 0 21.71 12a9.64 9.64 0 0 0-2.543-6.548l1.001-1.002c4.031 4.359 3.935 11.182-.301 15.417z"/>
      </svg>
      <text x="26" y="19" fill="#00D395" fontFamily="system-ui, sans-serif" fontSize="14" fontWeight="600">Circle</text>
    </svg>
  );
}

export function MoneyGramLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <svg viewBox="0 0 24 24" width="20" height="20" y="4">
        <path fill="#FF6600" d="M24 12c0 6.6274-5.3726 12-12 12S0 18.6274 0 12c0-1.8257.4071-3.5554 1.1374-5.1051C.6514 8.1257.433 9.3446.433 10.4863c0 5.4334 4.3868 6.2203 6.2537 6.2023 2.8371-.0257 6.1543-1.416 8.9485-3.9909l-.4714 2.6494c-.1054.606.2906 1.1392.8957 1.1426h.2503c.6274 0 1.0732-.5108 1.1863-1.1426l1.0063-5.6622c.12-.6283-.2932-1.14-.9214-1.14h-5.6726c-.6309 0-1.2077.3342-1.32.9677l-.0446.2554c-.09.6026.33 1.0569.9317 1.0569h2.9589a9.48 9.48 0 0 0-.1414.1388c-2.04 1.9312-4.5558 2.988-6.6403 2.988-2.0803 0-4.41-1.3123-4.41-4.2686C3.2426 3.5546 8.9906 0 12 0c6.6137 0 12 5.3726 12 12"/>
      </svg>
      <text x="26" y="19" fill="#FF6600" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">MoneyGram</text>
    </svg>
  );
}

export function FreighterLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="18" height="18" rx="4" fill="currentColor" opacity="0.15"/>
      <path d="M7 11h8M7 14h6M7 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="26" y="19" fill="currentColor" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">Freighter</text>
    </svg>
  );
}

export function SorobanLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <circle cx="8" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="14" cy="11" r="1.5" fill="currentColor"/>
      <circle cx="11" cy="17" r="1.5" fill="currentColor"/>
      <text x="24" y="19" fill="currentColor" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">Soroban</text>
    </svg>
  );
}

export function LobstrLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="14" r="9" fill="#5A3FFF" opacity="0.15"/>
      <path d="M8 11l3 3 3-3" stroke="#5A3FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="24" y="19" fill="#5A3FFF" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="700">LOBSTR</text>
    </svg>
  );
}

export function BeansLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="14" r="8" fill="#34C759" opacity="0.15"/>
      <path d="M8 14c0-3 2-5 4-4s2 5 0 6-4-1-4-2z" fill="#34C759"/>
      <text x="24" y="19" fill="#34C759" fontFamily="system-ui, sans-serif" fontSize="13" fontWeight="600">Beans App</text>
    </svg>
  );
}
