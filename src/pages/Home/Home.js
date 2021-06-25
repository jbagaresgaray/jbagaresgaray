import AboutArea from "../../components/Sections/AboutArea/AboutArea";
import BannerArea from "../../components/Sections/BannerArea/BannerArea";
import ServiceArea from "../../components/Sections/ServiceArea/ServiceArea";
import SkillsFeatureArea from "../../components/Sections/SkillsFeatureArea/SkillsFeatureArea";
import ToolsFeatureArea from "../../components/Sections/ToolsFeatureArea/ToolsFeatureArea";
import ProjectArea from "../../components/Sections/ProjectArea/ProjectArea";
import ContactArea from "../../components/Sections/ContactArea/ContactArea";
import DefaultFooter from "../../components/DefaultFooter/DefaultFooter";

function Home() {
  return (
    <>
      <BannerArea />
      <ServiceArea />
      <AboutArea />
      <SkillsFeatureArea />
      <ToolsFeatureArea />
      <ProjectArea />
      <ContactArea />
      <DefaultFooter />
    </>
  );
}

export default Home;
