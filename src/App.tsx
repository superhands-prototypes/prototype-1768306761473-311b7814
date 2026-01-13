import { useState } from 'react'

export default function App() {
  const [email, setEmail] = useState('grant.maclennan@gmail.com')
  const [password, setPassword] = useState('secretpassword')
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { email, password, rememberMe })
  }

  return (
    <div className="login-container">
      <div className="stripe-logo">
        <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.2 10.2 0 0 1-4.56 1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.23 0 .59-.04 1.26-.06 1.85zm-6.02-5.7c-1.08 0-2.04.78-2.21 2.52h4.32c-.08-1.64-.78-2.52-2.11-2.52zM41.9 20.2V5.6l4.18-.71v15.31H41.9zm0-18.12L46.08.94v3.27l-4.18.7v-2.83zm-5.55 13.44c0-1.2-.49-2.02-1.59-2.02-.68 0-1.37.32-1.91.78v5.66h-4.18V5.6l4.18-.71v5.14c.97-.72 2.2-1.3 3.7-1.3 2.72 0 3.97 1.82 3.97 4.78v6.69h-4.17v-5.68zm-14.92 4.68v-6.96c0-1.2-.49-2.02-1.59-2.02-.68 0-1.37.32-1.91.78v8.2h-4.18V9.2l4.18-.7v1.02c.97-.72 2.2-1.3 3.7-1.3 2.72 0 3.97 1.82 3.97 4.78v7.2h-4.17zM7.46 6.81C5.73 6.81 4.3 7.5 3.26 8.5l-.04-8.5H0V20.2h2.85l.2-1.02c1.04 1.06 2.44 1.25 3.46 1.25 3.48 0 5.87-2.82 5.87-6.81 0-3.85-2.15-6.81-4.92-6.81zm-.95 10.3c-.9 0-1.68-.26-2.29-.89v-5.3c.58-.58 1.35-.92 2.25-.92 1.67 0 2.73 1.45 2.73 3.5 0 2.16-1.02 3.61-2.69 3.61z"/>
        </svg>
      </div>
      
      <div className="login-card">
        <h1>Sign in to your account</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          
          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password">Forgot your password?</a>
            </div>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me on this device</label>
          </div>
          
          <button type="submit" className="btn-primary">
            Sign in
          </button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <button className="btn-secondary">
          <svg className="google-icon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
        
        <button className="btn-secondary">
          Sign in with passkey
        </button>
        
        <button className="btn-secondary">
          Sign in with SSO
        </button>
        
        <div className="signup-footer">
          <span>New to Stripe? </span>
          <a href="#">Create account</a>
        </div>
      </div>
      
      <footer className="page-footer">
        <span>© Stripe</span>
        <a href="#">Privacy & terms</a>
      </footer>
    </div>
  )
}
