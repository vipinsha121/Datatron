import React, { useEffect } from 'react';

import './TermsService.scss';

const TermsService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms_service-container newResource">
      <div className="terms_service-wrapper">
        <h3 className="sections-wrapper-h3">Terms of Service Agreement</h3>
        <p className="terms_service-paragraph">
          Welcome to Datatron, operated by Datatron Technologies, Inc., located at San Francisco, CA.
          By using the website located at datatron.com, the related mobile website, and the mobileapplication (collectively, the “Websites”),
          you agree to be bound by these Terms of Service (this“Terms of Service” or “Agreement”), whether or not you register as a member of Datatron("Member").
          If you wish to become a Member and/or make use of the service (the “Service”), please read this Agreement. If you object to anything in this Agreement or the Datatron PrivacyPolicy,
          do not use the Service.
        </p>

        <p className="terms_service-paragraph">
          This Agreement is subject to change by  Datatron  at any time, effective upon posting on therelevant website.
          Your continued use of the Websites and the  following Datatron postingof revised terms of any section
          of the Agreement will constitute your express and binding acceptance of and consent to the revised Agreement.
        </p>Service

        <p className="terms_service-paragraph">
          PLEASE READ THIS AGREEMENT CAREFULLY AS IT CONTAINS IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS,
          REMEDIES AND OBLIGATIONS, INCLUDING VARIOUS LIMITATIONS AND EXCLUSIONS, AND A DISPUTE RESOLUTION CLAUSE
          THAT GOVERNS HOW DISPUTES WILL BE RESOLVED.
        </p>

        <p className="terms_service-paragraph">
          Electronic Agreement. This Agreement is an electronic contract that sets out the legally bindingterms
          of your use of the Websites and the Service. This Agreement may be modified by Datatron from time to time,
          such modifications to be effective upon posting by Datatron on the Websites. By accessing and/or using
          the Websites or becoming a Member, you accept this Agreement and agree to the terms, conditions and notices contained or referenced here in.
        </p>

        <p className="terms_service-title_paragraph">1. Access and Retention</p>
        <p className="terms_service-paragraph">
          In order to access and retain this electronic Agreement, you must have access to the Internet,
          either directly or through devices that access web-based content, and pay any service fees associated with such access.
          In addition, you must use all equipment necessary to make such connection to the World Wide Web,
          including a computer and modem or other access device. Please print a copy of this document for your records.
          To retain an electronic copy of this Agreement, you may save it into any word processing program.
        </p>

        <p className="terms_service-title_paragraph">2. Commercial Use of Service</p>
        <p className="terms_service-paragraph">
          If you are using the Service and/or accessing the Websites on behalf of a company, entity, or organization
          (collectively, a “Subscribing Entity”), you represent and warrant that:
        </p>

        <ul className="terms_service-list_wrapper">
          <li>
            You are an authorized representative of the Subscribing Entity, and that you have the authority to bind the Subscribing Entity to this Terms of Service;
          </li>
          <li>
            You have read and understand this Terms of Service; and
          </li>
          <li>
            You agree to this Terms of Service on behalf of the Subscribing Entity.
          </li>
        </ul>

        <p className="terms_service-paragraph">
          Illegal and/or unauthorized uses of the Websites include, but are not limited to, browsing or downloading illegal content,
          collecting usernames and/or email addresses of members by electronic or other means for the purpose of sending unsolicited email,
          unauthorized framing of or linking to the Websites, sharing or disclosing your username or password to any third party or
          permitting any third party to access your account, attempting to impersonate another user or person, use of the Websites
          in any fraudulent or misleading manner, any automated use of the system, such as scraping the Websites, automated scripts, spiders,
          robots, crawlers, data mining tools or the like, interfering with, disrupting, or creating an undue burden on the Websites or the networks or services connected to the Websites,
          and using the Websites in a manner inconsistent with any and all applicable laws and regulations. Illegal and/or unauthorized use of the Websites may be investigated,
          and appropriate legal action may be taken, including without limitation, civil, criminal, and injunctive redress. Use of the Websites and Service is with the permission of Datatron,
          which may be revoked at any time, for any reason, in Datatron’s sole discretion.
        </p>

        <p className="terms_service-title_paragraph">3. Account Security.</p>
        <p className="terms_service-paragraph">
          You are responsible for maintaining the confidentiality of the username and password that you designate during the registration process,
          and you are fully responsible for all activities that occur under your username and password. You agree to (a) immediately notify Datatron
          of any unauthorized use of your username or password or any other breach of security, and (b) ensure that you exit from your account
          at the end of each session. Datatron will not be liable for any loss or damage arising from your failure to comply with this provision.
          You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or
          record your password or other personal information. If you share your computer with others, you may wish to consider disabling your
          auto-login feature if you have it linked to your Datatron account.
        </p>

        <p className="terms_service-title_paragraph">4. Your Use of the Websites</p>

        <ul className="terms_service-list_wrapper">
          <li className="terms_service-list_item">
            You may not browse or download illegal content.
          </li>
          <li className="terms_service-list_item">
            You must not copy or capture, or attempt to copy or capture, any content from the Websites (the “Content”) or any part of the Websites,
            unless given express permission by Datatron.
          </li>
          <li className="terms_service-list_item">
            You must not copy, republish, adapt, make available or otherwise communicate to the public, display, perform, transfer, share,
            distribute or otherwise use or exploit any Content on or from the Platform, except (i) where such Content is created by you (such content, “Your Content”),
            or (ii) as permitted under these Terms of Service, and within the parameters set by the person or entity that uploaded the Content (the “Uploader”)
            (for example, under the terms of Creative Commons licenses selected by the Uploader).
          </li>
          <li className="terms_service-list_item">
            You must not use any Content (other than Your Content) in any way that is designed to create a separate content service or that replicates any part of the Websites’ offering.
          </li>
          <li className="terms_service-list_item">
            You must not employ scraping or similar techniques to aggregate, repurpose, republish or otherwise make use of any Content.
          </li>
          <li className="terms_service-list_item">
            You must not employ the use of bots, botnets, scripts, apps, plugins, extensions or other automated means to register accounts,
            log-in, post comments, or otherwise to act on your behalf, particularly where such activity occurs in a multiple or repetitive
            fashion. You must not offer or promote the availability of any such techniques or services to any other users of the Websites.
          </li>
          <li className="terms_service-list_item">
            You must not alter or remove, or attempt to alter or remove, any trademark, copyright or other proprietary or legal notices contained in,
            or appearing on, the Websites or any Content appearing on the Websites (other than Your Content).
          </li>
          <li className="terms_service-list_item">
            You must not, and must not permit any third party to, copy or adapt the object code of the Websites, or reverse engineer,
            reverse assemble, decompile, modify or attempt to discover any source or object code of any part of the Websites,
            or circumvent or attempt to circumvent or copy any copy protection mechanism or access any rights management information
            pertaining to Content other than Your Content.
          </li>
          <li className="terms_service-list_item">
            You must not use the Websites to upload, post, store, transmit, display, copy, distribute, promote,
            make available or otherwise communicate to the public:
            <ul className="terms_service-list_wrapper_disc">
              <li>
                any Content that is offensive, abusive, libelous, defamatory, obscene, racist, sexually explicit,
                ethnically or culturally offensive, indecent, that promotes violence, terrorism, or illegal acts,
                incites hatred on grounds of race, gender, religion or sexual orientation, or is otherwise objectionable
                in Datatron’s sole and reasonable discretion;
              </li>
              <li>
                any information, Content or other material that violates, plagiarizes, misappropriates or infringes
                the rights of third parties including, without limitation, copyright, trademark rights, rights of privacy or publicity,
                confidential information or any other right; or
              </li>
              <li>
                any Content that violates, breaches or is contrary to any law, rule, regulation,
                court order or is otherwise is illegal or unlawful in Datatron’s sole and reasonable opinion;
              </li>
              <li>
                any material of any kind that contains any virus, Trojan horse, spyware, adware, malware, bot,
                time bomb, worm, or other harmful or malicious component, which will or might overburden, impair or disrupt the Websites or
                servers or networks forming part of, or connected to, the Websites, or which does or might restrict or inhibit any other
                user's use and enjoyment of the Websites; or
              </li>
              <li>
                any unsolicited or unauthorized advertising, promotional messages, spam or any other form of solicitation.
              </li>
            </ul>
          </li>
          <li className="terms_service-list_item">
            You must not commit or engage in, or encourage, induce, solicit or promote, any conduct that would constitute a criminal offense,
            give rise to civil liability or otherwise violate any law or regulation.
          </li>
          <li className="terms_service-list_item">
            You must not rent, sell or lease access to the Websites, or any Content on the Websites, although this will not prevent you from
            including links from Your Content to any legitimate online download store from where any item of Your Content may be purchased.
          </li>
          <li className="terms_service-list_item">
            You must not deliberately impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity,
            for example, by registering an account in the name of another person or company, or sending messages or making comments using the name of another person.
          </li>
          <li className="terms_service-list_item">
            You must not stalk, exploit, threaten, abuse or otherwise harass another user, or any Datatron employee. If we feel that your behavior
            towards any of our employees is at any time threatening or offensive, we reserve the right to immediately terminate your membership
            and you will not be entitled to any refund of unused subscription fees.
          </li>
          <li className="terms_service-list_item">
            You must not sell or transfer, or offer to sell or transfer, any Datatron account to any third party without the prior written approval of Datatron.
          </li>
          <li className="terms_service-list_item">
            You must not collect or attempt to collect personal data, or any other kind of information about other users, including without limitation,
            through spidering or any form of scraping.
          </li>
          <li className="terms_service-list_item">
            You must not violate, circumvent or attempt to violate or circumvent any data security measures employed by Datatron or any Uploader;
            access or attempt to access data or materials which are not intended for your use; log into, or attempt to log into, a server or account
            which you are not authorized to access; attempt to scan or test the vulnerability of Datatron’s servers, system or network or attempt to
            breach Datatron’s data security or authentication procedures; attempt to interfere with the Websites or the Services by any means including,
            without limitation, hacking Datatron’s servers or systems, submitting a virus, overloading, mail-bombing or crashing. Without limitation to
            any other rights or remedies of Datatron under these Terms of Service, Datatron reserves the right to investigate any situation that appears
            to involve any of the above, and may report such matters to, and cooperate with, appropriate law enforcement authorities in prosecuting any
            users who have participated in any such violations.
          </li>
        </ul>

        <p className="terms_service-paragraph">
          You agree to comply with the above conditions, and acknowledge and agree that Datatron has the right, in its sole discretion, to terminate your
          account or take such other action as we see fit if you breach any of the above conditions or any of the other terms of these Terms of Service.
          This may include taking court action and/or reporting offending users to the relevant authorities.
        </p>

        <p className="terms_service-title_paragraph">5. Representations and Warranties. </p>
        <p className="terms_service-paragraph">
          You hereby represent and warrant to Datatron as follows:
        </p>

        <ul className="terms_service-list_wrapper">
          <li className="terms_service-list_item">
            Your Content, and each and every part thereof, is an original work by you, or you have obtained all rights, licenses, consents and permissions necessary in order to use,
            and (if and where relevant) to authorize Datatron to use, Your Content pursuant to these Terms of Service, including, without limitation, the right to upload, reproduce,
            store, transmit, distribute, share, publicly display, publicly perform, make available and otherwise communicate to the public Your Content, and each and every part thereof,
            on, through or via the Websites, any and all Services and any third party services.
          </li>
          <li className="terms_service-list_item">
            Your Content and the availability thereof on the Platform does not and will not infringe or violate the rights of any third party, including, without limitation,
            any intellectual property rights, performers' rights, rights of privacy or publicity, or rights in confidential information.
          </li>
          <li className="terms_service-list_item">
            You have obtained any and all necessary consents, permissions and/or releases from any and all persons appearing in Your Content in order to include their name,
            voice, performance or likeness in Your Content and to publish the same on the Websites and via any third party services.
          </li>
          <li className="terms_service-list_item">
            Your Content, including any comments that you may post on the Websites, is not and will not be unlawful, offensive, abusive, libelous, defamatory, obscene, racist,
            sexually explicit, ethnically or culturally offensive, indecent, will not promote violence, terrorism, or illegal acts, or incite hatred on grounds of race, gender, religion or sexual orientation.
          </li>
          <li className="terms_service-list_item">
            Your Content does not and will not create any liability on the part of Datatron, its subsidiaries, affiliates, successors, and assigns, and their respective employees, agents, directors, officers and/or shareholders.
          </li>
        </ul>

        <p className="terms_service-paragraph">
          Datatron reserves the right to remove Your Content, suspend or terminate your access to the Platform and/or pursue all legal remedies if we believe that any of Your Content breaches any of the foregoing
          representations or warranties, or otherwise infringes another person's rights or violates any law, rule or regulation.
        </p>

        <p className="terms_service-title_paragraph">6. Term. </p>
        <p className="terms_service-paragraph">
          This Agreement will remain in full force and effect while you use the Websites and/or Service. You may terminate your membership and/or subscription at any time by contacting us at <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>.
          If you resign or cancel your membership and/or subscription to Datatron, to help Datatron analyze and improve the Service, you may be asked to provide a reason for your resignation/cancellation.
          Datatron may terminate your membership and/or subscription for any reason by sending notice to you at the email address you provide in your application for membership,
          or such other email address as you may later provide to Datatron. If Datatron terminates your membership in the Service because you have breached this Agreement,
          you will not be entitled to any refund of unused subscription fees. All decisions regarding the termination of accounts shall be made in the sole discretion of Datatron.
          Datatron is not required to provide you notice prior to terminating your membership and/or subscription. Datatron is not required, and may be prohibited,
          from disclosing a reason for the termination of your account. Even after your membership or subscription is terminated, this Agreement will remain in effect.
          All terms that by their nature may survive termination of this Agreement shall be deemed to survive such termination.
        </p>

        <p className="terms_service-title_paragraph">7. Modifications to Service. </p>
        <p className="terms_service-paragraph">
          Datatron reserves the right at any time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.
          You agree that Datatron shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
        </p>

        <p className="terms_service-title_paragraph">8. Blocking of IP Addresses. </p>
        <p className="terms_service-paragraph">
          In order to protect the integrity of the Services, Datatron reserves the right at any time in its sole discretion to block Members from certain IP addresses from accessing the Websites.
        </p>

        <p className="terms_service-title_paragraph">9. Content.</p>

        <ul className="terms_service-list_wrapper">
          <li className="terms_service-list_item">
            Proprietary Rights. Datatron retains all proprietary rights in the Websites and the Service. The Websites contains the copyrighted material,
            trademarks, and other proprietary information of Datatron, and its licensors. Except where we have given you express written permission,
            you may not copy, modify, publish, transmit, distribute, perform, display, or sell any such proprietary information. All content on Datatron is proprietary.
            Except where otherwise specified in this Agreement, all Content is copyrighted material of Datatron and for Datatron’s Members' use only.
            Distribution of Content to others is strictly prohibited. You agree that Datatron would be irreparably harmed by any violation or threatened violation of this section and that,
            therefore, Datatron shall be entitled to an injunction prohibiting you from any violation or threatened violation of this section, without posting bond,
            in addition to any other right or remedy it may have.
          </li>
          <br />
          <p>
            We may provide links to third party websites, and some of the content appearing on Datatron may be supplied by third parties. Datatron has no responsibility for these third party websites nor for their content, which is subject to and governed by the Terms of Service and/or privacy policies, if any, of the applicable third party content providers.
          </p>
          <li className="terms_service-list_item">
            Ownership of Your Content; Licenses.
            You agree that any content you upload to the Websites and/or the Service (“Your Content”) shall become the property of Datatron. This shall have no effect on Sections <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u> (Copyright Policy), <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u> (Limitation of Liability), and <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u> (Indemnity by You) of this Agreement.
          </li>
          <br />
          <p>
            However, with respect to Your Content, Datatron grants you a worldwide, royalty-free and non-exclusive license(s) to use, distribute, reproduce, and publicly display such content, except with regard to commercial or for-profit use account.
          </p>
          <br />
          <p>
            Any Content other than Your Content is the property of the relevant Uploader, and is or may be subject to copyright,
            trademark rights or other intellectual property or proprietary rights. Such Content may not be downloaded, reproduced,
            distributed, transmitted, re-uploaded, republished, displayed, sold, licensed, made available or otherwise communicated
            to the public or exploited for any purposes except via the features of the Websites from time to time and within the
            parameters set by the Uploader on the Service or with the express written consent of the Uploader. Where you repost another user's Content, or include another user's Content in a set, you acquire no ownership rights whatsoever in that Content. Subject to the rights expressly granted in this section, all rights in Content are reserved to the relevant Uploader.
          </p>
        </ul>

        <p className="terms_service-title_paragraph">10. Restrictions on Use of Materials. </p>

        <p className="terms_service-paragraph">
          You acknowledge that Datatron contains images, text, and other content (collectively, "Intellectual Property") that is protected by copyrights,
          patents, trademarks, trade secrets and/or other proprietary rights, and that these rights are valid and protected in all forms,
          media and technologies existing now or hereafter developed. All Intellectual Property is copyrighted under the United States copyright laws (and, if applicable, similar foreign laws),
          and Datatron owns a copyright in the selection, coordination, arrangement and enhancement of such Intellectual Property.
          All trademarks appearing on this Websites are trademarks of their respective owners. You may not modify, publish, transmit,
          distribute, perform, participate in the transfer or sale, create derivative works of, or in any way exploit, any of the Intellectual Property,
          in whole or in part. When Intellectual Property is downloaded to your computer, you do not obtain any ownership interest in such Intellectual Property.
          Modification of the Intellectual Property or use of the Intellectual Property for any other purpose, including, but not limited to,
          use of any Intellectual Property in printed form or on any other website or networked computer environment is strictly prohibited unless you receive our prior written consent.
        </p>

        <p className="terms_service-title_paragraph">11. Copyright Policy. </p>
        <p className="terms_service-paragraph">
          Datatron prohibits the submission or posting of any information that infringes or violates the copyright rights
          and/or other intellectual property rights (including rights of privacy and publicity) of any person or entity.
        </p>

        <p className="terms_service-paragraph">
          Pursuant to Title 17, United States Code, Section 512(c)(2) or for any other claim of copyright infringement,
          you hereby agree that notifications of claimed copyright infringement be sent by certified mail to:
        </p>

        <p className="terms_service-paragraph">
          350 Townsend Street, Suite #204, San Francisco CA 94132
        </p>

        <p className="terms_service-paragraph">
          If you believe that your intellectual property right (or such a right that you are responsible for enforcing) is infringed by any content on the Site,
          please write to Datatron at the address shown above, giving a written statement that contains:
        </p>

        <ul className="terms_service-list_wrapper">
          <li className="terms_service-list_item">
            identification of the copyrighted work and/or intellectual property right claimed to have been infringed;
          </li>
          <li className="terms_service-list_item">
            identification of the allegedly infringing material on the Site that is requested to be removed;
          </li>
          <li className="terms_service-list_item">
            your name, address, and daytime telephone number, and an e-mail address if available;
          </li>
          <li className="terms_service-list_item">
            a statement that you have a good faith belief that the use of the copyrighted work and/or
            exercise of the intellectual property right is not authorized by the owner, its agent, or the law;
          </li>
          <li className="terms_service-list_item">
            a statement that the information in the notification is accurate, and, under penalty of perjury,
            that the signatory is authorized to act on behalf of the owner of the right that is allegedly infringed; and
          </li>
          <li className="terms_service-list_item">
            the signature of the intellectual property right owner or someone authorized on the
            owner's behalf to assert infringement of the right.
          </li>
        </ul>

        <p className="terms_service-paragraph">
          Datatron will process any notice of alleged infringement which it receives and will take appropriate action as required
          by the Digital Millennium Copyright Act (DMCA) 17 U.S.C. 512(c)(3) or other applicable copyright law. U.S. law provides
          significant penalties for submitting such a statement falsely. Under appropriate circumstances,
          persons who repeatedly submit infringing or unlawful material will be prohibited from posting further submissions.
        </p>

        <p className="terms_service-title_paragraph">12. Liability for Content.  </p>
        <p className="terms_service-paragraph">
          You hereby acknowledge and agree that Datatron  (i) stores Content and other information at the direction, request and with the authorization of its users, (ii) acts merely as a passive conduit and/or host for the uploading, storage and distribution of such Content, and (iii) plays no active role and gives no assistance in the presentation or use of the Content. You are solely responsible for all of Your Content that you upload, post or distribute to, on or through the Websites, and to the extent permissible by law, Datatron excludes all liability with respect to all Content (including Your Content) and the activities of its users with respect thereto.
        </p>

        <p className="terms_service-paragraph">
          You hereby acknowledge and agree that Datatron cannot and does not review the Content created or uploaded by its users, and neither Datatron nor its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders has any obligation, and does not undertake or assume any duty, to monitor the Websites for Content that is inappropriate, that does or might infringe any third party rights, or has otherwise been uploaded in breach of these Terms of Service or applicable law.
        </p>

        <p className="terms_service-paragraph">
          Datatron and its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers and shareholders hereby exclude, to the fullest extent permitted by law, any and all liability which may arise from any Content uploaded to the Websites by users, including, but not limited to, any claims for infringement of intellectual property rights, rights of privacy or publicity rights, any claims relating to publication of defamatory, pornographic, obscene or offensive material, or any claims relating to the completeness, accuracy, currency or reliability of any information provided by users of the Websites. By using the Websites, you irrevocably waive the right to assert any claim with respect to any of the foregoing against Datatron or any of its subsidiaries, affiliates, successors, assigns, employees, agents, directors, officers or shareholders.
        </p>

        <p className="terms_service-title_paragraph">13. Repeat Infringers.</p>
        <p className="terms_service-paragraph">
          Datatron will suspend or terminate your access to the Websites if Datatron determines, in its sole and reasonable discretion, that you have repeatedly breached these Terms of Service.
        </p>

        <p className="terms_service-paragraph">
          If we receive a valid notification from a third party in accordance with our reporting processes or applicable law that any of Your Content infringes the copyright or other rights of such third party, or if we believe that your behavior is inappropriate and violates our Terms of Service, we will send you a written warning to this effect. Any user that receives more than two of these warnings is liable to have their access to the Websites terminated forthwith.
        </p>

        <p className="terms_service-paragraph">
          We will also suspend or terminate your account without warning if ordered to do so by a court, and/or in other appropriate circumstances, as determined by Datatron at its sole discretion.
        </p>

        <p className="terms_service-paragraph">
          Please note that we do not offer refunds to Members whose accounts are terminated as a result of repeated infringement of these Terms of Service.
        </p>

        <p className="terms_service-title_paragraph">14. Limitation of Liability. </p>
        <p className="terms_service-paragraph">
          In no event shall Datatron be liable for any damages whatsoever, whether direct, indirect, general, special, compensatory, consequential, and/or incidental, arising out of or relating to the Websites or Service, or use thereof. Nothing contained in this Websites or in any written or oral communications from Datatron or its employees or agents shall be construed to make any promise, covenant, or guaranty, all of which are explicitly disclaimed hereby, contrary to the statements and disclaimers contained in this paragraph.
        </p>

        <p className="terms_service-paragraph">
          The content and functionality on the Websites and the services provided by employees of the Websites are offered "as is" without warranty of any kind, either express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title and non-infringement. Datatron makes no warranties, express or implied, as to the ownership, accuracy, completeness or adequacy of the Websites’ content or that the functionality of the Websites will be uninterrupted or error-free or free from virus or third party attack. You hereby acknowledge that your use of the Websites and the Service is at your sole risk. UNDER NO CIRCUMSTANCES SHALL Datatron, ITS OFFICERS, OWNERS, EMPLOYEES OR AGENTS AND THEIR RESPECTIVE HEIRS, SUCCESSORS AND ASSIGNS BE LIABLE FOR ANY DAMAGES, INCLUDING DIRECT, INCIDENTAL, PUNITIVE, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES THAT DIRECTLY OR INDIRECTLY RESULT FROM USE OF, OR INABILITY TO USE, THE WEBSITES OR SERVICE OR THE INFORMATION CONTAINED THEREIN, INCLUDING WITHOUT LIMITATION FOR VIRUSES ALLEGED TO HAVE BEEN OBTAINED FROM THE WEBSITES, EVEN IF Datatron HAS BEEN NOTIFIED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES AND REGARDLESS OF THE THEORY OF LIABILITY.
        </p>

        <p className="terms_service-paragraph">
          TO THE GREATEST EXTENT PERMITTED BY LAW, YOU AGREE THAT IN NO EVENT WILL Datatron HAVE ANY LIABILITY, CONTINGENT OR OTHERWISE, FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES IN ANY WAY ARISING OUT OF OR RELATING TO THE AGREEMENT, WEBSITES OR THE SERVICE, INCLUDING, BUT NOT LIMITED TO LOST PROFITS; LOST DATA; LOSS OF GOODWILL; COPYRIGHT, TRADEMARK, OR OTHER INTELLECTUAL PROPERTY INFRINGEMENT; WORK STOPPAGE; EQUIPMENT FAILURE OR MALFUNCTION; ILLEGAL, IMMORAL OR FRAUDULENT ACTIVITY; PERSONAL INJURY; PROPERTY DAMAGE; OR ANY OTHER DAMAGES OR LOSSES, EVEN IF Datatron HAS BEEN ADVISED OF THE POSSIBILITY THEREOF, AND REGARDLESS OF THE LEGAL OR EQUITABLE THEORY (CONTRACT, TORT, STATUTE, INDEMNITY OR OTHERWISE) UPON WHICH SUCH LIABILITY IS BASED.
        </p>

        <p className="terms_service-paragraph">
          In the event that any of the foregoing limitations are deemed to be unenforceable, to the greatest extent permitted by law, you agree that the entire aggregate liability of Datatron and sole remedy available to any Member in any case in any way arising out of or relating to the Agreement, Websites or the Service shall be limited to monetary damages that in the aggregate may not exceed the greater of $500.00 or the sum of any amount paid by the Member or user to Datatron during the six months prior to notice to Datatron of the dispute for which the remedy is sought.
        </p>

        <p className="terms_service-title_paragraph">15. Indemnity by You.</p>
        <p className="terms_service-paragraph">
          You agree to indemnify and hold Datatron, its subsidiaries, affiliates, officers, agents, and other partners and employees, harmless from any loss, liability, claim, or demand, including reasonable attorneys' fees, arising out of or related to:
        </p>

        <ul className="terms_service-list_wrapper">
          <li className="terms_service-list_item">
            your use of the Service and/or Websites in violation of this Agreement and/or arising from a breach of this Agreement including without limitation your representations and warranties set forth above;
          </li>
          <li className="terms_service-list_item">
            any third party claim of infringement of copyright or other intellectual property rights or invasion of privacy arising from the hosting of Your Content on the Websites, and/or your making available thereof to other users of the Websites, and/or the actual use of Your Content by other users of the Websites or related services in accordance with these Terms of Service and the parameters set by you with respect to the distribution and sharing of Your Content;
          </li>
          <li className="terms_service-list_item">
            any activity related to your account, either by you or by any other person accessing your account with or without your consent unless such activity was caused by the act of Datatron.
          </li>
        </ul>

        <p className="terms_service-title_paragraph">16. Attorney Fees.  </p>
        <p className="terms_service-paragraph">
          In the event that Datatron is successful in whole or in part in any action or proceeding related to or arising from this Agreement, you shall be responsible for Datatron’s attorneys' fees and costs.
        </p>

        <p className="terms_service-title_paragraph">17. Parental or Guardian Permission. </p>
        <p className="terms_service-paragraph">
          Some of the Content on the Websites may not be appropriate for children. CHILDREN UNDER THE AGE OF 17 ARE NOT PERMITTED TO USE THE WEBSITES UNLESS A SUPERVISING PARENT OR GUARDIAN IS PRESENT.
        </p>

        <p className="terms_service-title_paragraph">18. Privacy. </p>
        <p className="terms_service-paragraph">
          Use of the Websites and/or the Service is also governed by our Privacy Policy, located at [PRIVACY POLICY URL]
        </p>

        <p className="terms_service-title_paragraph">19. Jurisdiction and Choice of Law; Dispute Resolution. </p>
        <p className="terms_service-paragraph">
          If there is any dispute arising out of the Websites and/or the Service, by using the Websites and/or Service, you expressly agree that any such dispute shall be governed by the laws of the State of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>, without regard to its conflict of law provisions, and you expressly agree and consent to the exclusive jurisdiction and venue of the state and federal courts of the State of New York, for the resolution of any such dispute. Acceptance of the terms and conditions of this Agreement constitutes your consent to be sued in such courts and to accept service of process outside the State of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u> with the same force and effect as if such service had been made within the State of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>. You hereby agree to accept service of process for any action hereunder by certified mail return receipt requested which service shall have the same force and effect as though service had been effected by personal service in the applicable jurisdiction. If any part of these terms is unlawful, void, or unenforceable, that part will be deemed severable and will not affect the validity and enforceability of the remaining provisions.
        </p>

        <p className="terms_service-title_paragraph">20. Arbitration Provision/No Class Action.</p>
        <p className="terms_service-paragraph">
          Except where prohibited by law, as a condition of using the Websites and/or Service, you agree that any and all disputes, claims and causes of action (collectively, "Claim") arising out of or connected with the Websites and/or Service, shall be resolved individually, without resort to any form of class action, exclusively by binding arbitration under the rules of the American Arbitration Association for full and final settlement of such Claim, and judgment on the award rendered in the arbitration may be entered in any court having jurisdiction thereof. Such arbitration shall be held in accordance with the Rules for Expedited Procedures under the Commercial Arbitration Rules of the American Arbitration Association or other mutually agreeable organization, before a single arbitrator (with knowledge and expertise of copyright law if the claim is all or partially for copyright infringement), selected by agreement of both parties or by an independent mediator (with knowledge and expertise of copyright law if the claim is all or partially for copyright infringement) if the parties are unable to agree. The parties shall split the arbitration and/or mediator costs. An award rendered by the arbitrator(s) may be entered and confirmed by the courts of the State of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>, County of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>. The parties agree that any post-arbitration action seeking to enforce an arbitration award or action seeking equitable or injunctive relief shall be brought exclusively in the courts of the State of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>. County of
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>.
        </p>

        <p className="terms_service-title_paragraph">21. No Third Party Beneficiaries.</p>
        <p className="terms_service-paragraph">
          You agree that, except as otherwise expressly provided in this Agreement, there shall be no third party beneficiaries to this Agreement.
        </p>

        <p className="terms_service-title_paragraph">22. Availability Outside the U.S. </p>
        <p className="terms_service-paragraph">
          If you access Datatron from outside of the United States, you do so at your own risk and are responsible for compliance with the laws of your jurisdiction. If you access the Websites from outside of the United States, you acknowledge that any personal information you provide will be processed in the United States and other geographies as selected by us in our sole discretion, and you hereby consent to the collection and processing of your personal information in a manner consistent with this Agreement and the Privacy Policy.
        </p>

        <p className="terms_service-title_paragraph">23. Entire Agreement. </p>
        <p className="terms_service-paragraph">
          This Agreement contains the entire agreement between you and Datatron regarding the use of the Websites and/or the Service.
        </p>

        <p className="terms_service-title_paragraph">24. Severability; Waiver. </p>
        <p className="terms_service-paragraph">
          If any provision of this Agreement is found to be invalid by any court having competent jurisdiction, the invalidity of such provision shall not affect the validity of the remaining provisions of this Agreement, which shall remain in full force and effect. No waiver of any term of this Agreement shall be deemed a further or continuing waiver of such term or any other term. In addition, Datatron’s failure to enforce any term of this Agreement shall not be deemed as a waiver of such term or otherwise affect Datatron’s ability to enforce such term at any point in the future.
        </p>

        <p className="terms_service-title_paragraph">25. Headings. </p>
        <p className="terms_service-paragraph">
          The section headings contained in this Agreement are for reference purposes only and shall not in any way affect the meaning or interpretation of this Agreement.
        </p>

        <p className="terms_service-paragraph">
          Please contact us with any questions regarding this agreement.
        </p>
      </div>
    </div>
  );
};

export default TermsService;
