import { Link } from 'react-router';
import { Button } from '@components/ui/Button';
import illustration404 from '@assets/illustration-404.svg';

export function NotFound() {
  return (
    <div className="app-main">
      <div
        className="app-stack-4"
        style={{
          maxWidth: 480,
          margin: '0 auto',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img
          src={illustration404}
          alt="404 page not found"
          style={{ width: '100%', maxWidth: 320, height: 'auto' }}
        />
        <h1 className="heading-xl app-section-title">Page not found</h1>
        <p className="body-l" style={{ color: 'var(--text-muted)' }}>
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <Link to="/">
          <Button variant="primary" size="large">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
