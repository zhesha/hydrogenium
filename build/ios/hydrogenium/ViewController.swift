//
//  ViewController.swift
//  hydrogenium
//
//  Created by Sasha Z on 10.10.16.
//  Copyright © 2016 Sasha Z. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var web: UIWebView!

    
    override func viewDidLoad() {
        super.viewDidLoad()
        
//        let htmlFile = Bundle.main.path(forResource: "index", ofType: "html")
//        let html = try? String(contentsOfFile: htmlFile!, encoding: String.Encoding.utf8)
//        web.loadHTMLString(html!, baseURL: nil)
        web.scalesPageToFit = true
        let htmlFile = Bundle.main.path(forResource: "index", ofType: "html")
        //[WebView loadRequest:[NSURLRequest requestWithURL:[NSURL fileURLWithPath:[[NSBundle mainBundle] pathForResource:@"index" ofType:@"html"]isDirectory:NO]]];
        
        
        web.loadRequest(URLRequest(url: URL(fileURLWithPath: htmlFile!)))
        
        //web.loadHTMLString(html!, baseURL: NSURL.fileURL(withPath: "./Resources/js"))
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

