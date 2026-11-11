import Layout from '@/components/web/WebLayout';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Layout gap="gap-0">
      <div className="min-h-screen flex items-center justify-center bg-[#f5f5f3] py-24 px-4">
        <div className="max-w-lg w-full rounded-[2rem] border border-black/10 bg-white px-8 py-16 text-center shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          <p className="text-xs font-bold uppercase tracking-[0.3em]">Faded Lines</p>
          <h2 className="mt-5 text-4xl font-extrabold text-black">Page not found</h2>
          <p className="mt-4 text-stone-600">The page you are looking for does not exist.</p>
          <Link to="/home" className="inline-flex mt-8 rounded-xl bg-black px-8 py-3 font-semibold text-white transition-colors hover:bg-stone-800">
            Back to home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFound;
