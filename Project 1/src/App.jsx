import { CoreConcept } from "./components/CoreConcept";
import { Header } from "./components/Header/Header";
import { TabContent } from "./components/TabContent";
import { CORE_CONCEPTS } from "./data/data";
import { useState } from 'react';
import { EXAMPLES } from "./data/data";
function App() {
	const [selectedTab, setSetlectedTab] = useState("components");
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	function handleTabChange(tabContent, index) {
		setSetlectedTab(tabContent);
		setActiveTabIndex(index);
	}

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<ul>
						{CORE_CONCEPTS.map(conceptItem =>
							<CoreConcept key={conceptItem.title} {...conceptItem} />)}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabContent onSelect={() => handleTabChange("components", 0)}
							isSelected={activeTabIndex === 0}>
							Components
						</TabContent>
						<TabContent onSelect={() => handleTabChange("jsx", 1)}
							isSelected={activeTabIndex === 1}>
							JSX
						</TabContent>
						<TabContent onSelect={() => handleTabChange("props", 2)}
							isSelected={activeTabIndex === 2}>
							Props
						</TabContent>
						<TabContent onSelect={() => handleTabChange("state", 3)}
							isSelected={activeTabIndex === 3}>
							State
						</TabContent>
					</menu>
					{activeTabIndex + 1 &&
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTab].title}</h3>
							<p>{EXAMPLES[selectedTab].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTab].code}</code>
							</pre>
						</div>
					}
				</section>
			</main>
		</div>
	);
}

export default App;
