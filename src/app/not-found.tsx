import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col justify-center py-20">
      <Heading level={1} as="h1">
        Page not found
      </Heading>
      <p className="mt-4 max-w-md text-muted">
        That route does not exist. Use the navigation to reach a live page.
      </p>
      <ButtonLink href="/" variant="ghost" className="mt-8 self-start">
        Back home
      </ButtonLink>
    </Container>
  );
}
