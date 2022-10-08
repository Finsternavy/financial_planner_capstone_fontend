import { useState } from "react"
import "../components/resources.css"


const Resources = () => {

    const [resources, setResources] = useState([
        {"title":"U.S. Securities and Exchange Commission",
        "url": "https://www.investor.gov/"},
        {"title":"Financial Industry Regulatory Authority (FINRA)",
        "url": "https://www.finrafoundation.org"},
        {"title":"Social Security Benefits",
        "url": "https://www.ssa.gov/"},
        {"title":"Internal Revenue Service (IRS)",
        "url": "https://www.irs.gov/"},
        {"title":"Internal Revenue Service (IRS)  (Tax Estimator)",
        "url": "https://www.irs.gov/individuals/tax-withholding-estimator "},
        {"title":"Internal Revenue Service (IRS) W-4",
        "url": "https://www.irs.gov/pub/irs-prior/fw4--2020.pdf "},
        {"title":"U.S. Department of Agriculture (USDA) (Food Plan Cost)",
        "url": "https://www.fns.usda.gov/cnpp/usda-food-plans-cost-food-reports-monthly-reports "},
        {"title":"Healthcare Marketplace",
        "url": "https://www.healthcare.gov/see-plans/"},
        {"title":"Annual Credit Report",
        "url": "https://www.annualcreditreport.com "},
        {"title":"Federal Deposit Insurance Corporation (FDIC) Money Smart ",
        "url": "https://www.fdic.gov/consumers/consumer/moneysmart/index.html"},
        {"title":"Consumer Finance Protection Bureau (CFPB)",
        "url": "https://www.consumerfinance.gov/"},
        {"title":"Federal Trade Commission (FTC)",
        "url": "https://www.ftc.gov"},
        {"title":"Identity Theft",
        "url": "https://www.identitytheft.gov"}
    ])

    return (
        <div className="resources container">
            <h1 className="header">Financial Resources</h1>
            {
                resources.map(resource => (
                    <div className="resource-container">
                        <p className="title">{resource.title}</p>
                        <a href={resource.url} className="url" target="_blank">{resource.url}</a>
                    </div>
                ))
            }
        </div>
    )
}

export default Resources