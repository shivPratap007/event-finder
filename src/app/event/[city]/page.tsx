import Heading from "@/components/Heading";

type EventProps = { params: { city: string } };

export default async function Event({ params }: EventProps) {
  const slug = params.city;
  try {
    const response = await fetch(
      `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
    );
    const event = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <section>
      <Heading text={params.city} />
    </section>
  );
}
