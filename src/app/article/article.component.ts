import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  title = "What are the 5 best readers for people that are tired of turning pages?";
  article_description = "Owning a quality home printer can save time, money, and provide greater control over the quality of printed materials. With a home printer, individuals no longer need to make trips to print shops or pay for printing services, resulting in cost savings and convenience. Home printers also provide flexibility, allowing for the creation of a wide range of materials, from photos to business documents. With so many options available on the market, individuals should consider their needs and invest in a quality home printer to reap the benefits of having a printer readily available in their own home.";

  items: items[] = [
    {name: 'HP OfficeJet Pro 9015e', description: 'The HP OfficeJet Pro 9015e is a versatile all-in-one inkjet printer designed for small to medium-sized businesses. It can print, scan, copy, and fax documents, and offers high-quality printing with up to 4800 x 1200 dpi resolution. It has a 35-page automatic document feeder, supports a variety of connectivity options, and has several security features. However, it has some drawbacks such as high ink costs, slow print speed, and limited paper capacity. Overall, the HP OfficeJet Pro 9015e is a solid choice for businesses looking for a reliable and versatile printer.',
    pros: ['All-in-one functionality','High-quality printing','Connectivity options','Security features','Energy efficient'],
    cons: ['High ink costs','Slow print speed','Limited paper capacity','Paper handling issues','Limited durability']
  }
  ];
    // 'Canon PIXMA TS9120', 
    // 'Brother HL-L2350DW', 
    // 'Epson Expression Premium XP-7100', 
    // 'HP Envy 6055e'];

  constructor() {}

  ngOnInit() {

  }

}

interface items {
  name: string,
  description: string,
  pros: string[],
  cons: string[],
}
