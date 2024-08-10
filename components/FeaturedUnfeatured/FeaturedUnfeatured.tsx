import ComponentList from "@/components/ComponentList/ComponentList";
import { FeaturedUnfeaturedProps } from "@/types";

export default function FeaturedUnfeatured<T extends object>({ featuredProps, unfeaturedProps, ListedComponent }: FeaturedUnfeaturedProps<T>) {
    return (
        <>
          {featuredProps.length > 0 && <section>
              <h2>Featured...</h2>
              <ol>
                <ComponentList dataList={featuredProps} ListedComponent={ListedComponent}/>
              </ol>
          </section>}
          {unfeaturedProps.length > 0 && <section>
              <h2>{unfeaturedProps.length ? 'More' : 'Featured'}...</h2>
              <ol>
                <ComponentList dataList={unfeaturedProps} ListedComponent={ListedComponent}/>
              </ol>
          </section>}
        </>
      );
}
