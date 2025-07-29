const e="Cloud-based CPQ platform for automated pricing and quote generation in enterprise sales.",n="CPQ Pricing Tool at Nokia",i="header.png",t=`Nokia, a global leader in telecommunications and networking, partnered with Elisa, a major Finnish telecom operator, to deliver advanced subscription-based solutions. As Elisa expanded its enterprise services, managing complex pricing structures and generating accurate invoices became increasingly challenging. Manual workflows were error-prone and time-consuming, leading to billing disputes and delayed revenue recognition.

Nokia launched a pricing tool project to automate pricing and streamline invoicing. The solution brought clarity, speed, and scalability to billing operations, strengthening Nokia's value to clients like Elisa through a more efficient and transparent experience.`,s=`- **Complex Product Configurations & Frequent Data Updates**  
Nokia's telecom offerings include highly interdependent components (e.g., radio units, basebands, licensing models). Product catalogs, pricing tiers, and discount rules change frequently, requiring the CPQ system to adapt rapidly and maintain accuracy.
- **Limited Visualization and Insights**  
Existing systems showed raw pricing data without visuals to highlight trends or anomalies, making quick interpretation tough. While the CPQ platform collects rich data, it lacks analysis and recommendations, a clear future enhancement opportunity.
- **Manual and Error-Prone Workflows**  
Prior to this solution, invoice generation relied on spreadsheets and fragmented processes, leading to delays, billing inaccuracies, and time-consuming dispute resolution.
- **Compliance and Auditability**  
Invoices needed to meet strict legal, tax, and auditing standards across different countries, requiring features like traceable calculation logic, version control, and PDF exports with precise formatting.
- **Demand for Automation and Integration**  
Sales teams wanted integration with existing CRM and ERP systems to enable automation of quote generation and order processing. Without proper integration, seamless workflows and extensibility were limited.`,a=`- **Work in Designer Team of** 3  
Collaborated closely with the Design System team to ensure consistency and scalability across the platform. Regular design reviews and shared component libraries enabled rapid iteration while maintaining visual coherence.
- **Regular Sync and workshop with Software Architect and project manager**  
Maintained regular syncs and workshops with the Software Architect, Engineers, and Project Manager to ensure technical feasibility and business alignment. This collaborative approach fostered shared understanding and accelerated decision-making processes.
- **User research and feedback integration**  
Conducted extensive user research with Nokia's sales teams and Sale Managers to understand their pricing workflows and pain points. Regular user testing sessions and feedback loops ensured the solution addressed real user needs and improved adoption rates.`,r=`- **Pricing Insights**  
Prioritized future capabilities to analyze pricing data and provide proactive pricing suggestions.
- **Product Configuration Management**  
Enabled organizing products into groups for easier, scalable pricing and policy enforcement.
- **Sales Performance Tracking and Visualization**  
Implemented detailed tracking and visual reporting of sales trends to support informed business decision-making.
- **Configuration Assistant**  
Designed a system that suggests compatible products and validates configurations based on business rules.
- **Pricing Recommendations**  
Implemented a system that analyzes past deals and customer profiles to suggest pricing strategies.`,o=`The CPQ Pricing Tool changed how Nokia's charging department works. Within the first 4 months, quote generation time dropped significantly, and pricing managers reported fewer pricing errors. The automated validation helped teams spot incompatible product combinations faster than manual checking.

**Business Impact:**

- **Reduced Quote Generation Time:** Pricing teams could generate complex quotes more efficiently, compared to **2-3 hours** with manual processes (measured by tracking quote creation time before and after implementation)
- **Improved Pricing Accuracy:** Significant reduction in pricing errors and billing disputes, with automated validation catching configuration issues before submission (based on error tracking and customer feedback)
- **Enhanced Deal Velocity:** Increase in deal closure rates, with faster quote turnaround times and improved customer satisfaction (measured by comparing deal cycle times)
- **Streamlined Integration:** Several enterprise customers successfully integrated the CPQ platform with their existing CRM systems, reducing manual data entry significantly (measured by tracking data entry time)

**Testing & Validation Results:**

**Prototype Testing:** Usability tests with approximately **8** pricing managers across **3 enterprise customers and 20+ sales representatives** confirmed the drag-and-drop interface reduced training time compared to previous spreadsheet-based methods. A/B testing validated the platform's accuracy across **50+** real-world deal scenarios.`,c=[{image:"prototype-listing.png",caption:"Sales teams can view and manage all their quotes in one dashboard, making it easy to track progress and find specific deals"},{image:"prototype-editor.png",caption:"The product configuration editor shows pricing calculations and smart suggestions as users build their quotes, helping them understand costs"}],d=[{label:"Full Research Report",url:"#"},{label:"User Flows",url:"#"},{label:"Interactive Prototype",url:"#"}],l="Project Length: **5 + 3(Testing) Months**",u="**Senior Product Designer**",g=["Enterprise","B2B","Sales","AI","SaaS"],p="CPQ Pricing Tool",m=`- Stakeholder and user interviews
- User journey and service blueprint mapping
- Defining user stories and scenarios
- Wireframing and prototyping
- Usability testing and iteration

*Note: The following images represent a portion of the research documentation for demonstration purposes.*`,h=[{image:"user-stories-service-blueprint.png",caption:"User stories and service blueprint mapping helped identify opportunities to optimize the CPQ workflow"}],f=`The CPQ platform incorporates intelligent features to enhance the pricing workflow. We designed these features with a focus on practical business value rather than AI for its own sake.

**Configuration Assistant:**
- Suggests compatible products and services based on user selections
- Validates configurations against business rules and requirements
- Reduces configuration errors by providing guidance during quote building

**Pricing Recommendations:**
- Analyzes past deal outcomes and customer profiles
- Suggests pricing strategies based on similar successful deals
- Helps sales teams optimize pricing for better win rates

**Error Prevention:**
- Identifies potential configuration issues before submission
- Uses business rules to validate quote completeness
- Reduces quote rejection rates and speeds up approval processes

These features were designed with input from sales teams and pricing managers, ensuring they address real business needs rather than being technology-driven solutions.`,b={title:e,subtext:n,banner:i,summary:t,problem:s,constraints:a,keyDecisions:r,outcomes:o,screenshots:c,appendices:d,timeSpent:l,role:u,industries:g,productName:p,ideation:m,ideationImages:h,aiFeatures:f};export{f as aiFeatures,d as appendices,i as banner,a as constraints,b as default,m as ideation,h as ideationImages,g as industries,r as keyDecisions,o as outcomes,s as problem,p as productName,u as role,c as screenshots,n as subtext,t as summary,l as timeSpent,e as title};
