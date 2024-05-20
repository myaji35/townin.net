import Image from "next/image";
import { Button } from "@/components/ui/button";
import createAuth0Client from '@auth0/auth0-spa-js';

async function configureAuth0() {
  const auth0Client = await createAuth0Client({
    domain: 'YOUR_DOMAIN',
    client_id: 'YOUR_CLIENT_ID',
    redirect_uri: window.location.origin
  });

  return auth0Client;
}

export default function Home() {
  return (
    <div>
      <Button>Hello from the index page111</Button>
    </div>
  );
}

