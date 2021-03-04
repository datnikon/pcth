import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionAnswer } from '../do-test/do-test.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  public coffeeQuestions: QuestionAnswer[] = [
    {
      title: 'Hạt cà phê được phát hiện vào năm nào?',
      answers: [{
        title: '1671',
        isCorrect: true
      },
      {
        title: '1571'
      },
      {
        title: '1681'
      },
      {
        title: '1651'
      }]
    },
    {
      title: 'Con vật nào giúp phát hiện ra hạt cà phê?',
      answers: [{
        title: 'Con bò'
      },
      {
        title: 'Con chó'
      },
      {
        title: 'Con dê',
        isCorrect: true
      },
      {
        title: 'Con gà'
      }]
    },
    {
      title: 'Đặc điểm của hạt cà phê Arabica là gì?',
      answers: [{
        title: 'Hạt dài, dẹp, nhân cong',
        isCorrect: true
      },
      {
        title: 'Hạt tròn, dẹp, nhân cong',
      },
      {
        title: 'Hạt tròn, nhân thẳng',
      },
      {
        title: 'Hạt dài, dẹp, nhân thẳng'
      }]
    }
    ,
    {
      title: 'Vị của hạt cà phê Arabica là gì?',
      answers: [{
        title: 'Đằng, chua',
      },
      {
        title: 'Chua hậu ngọt',
        isCorrect: true
      },
      {
        title: 'Ngọt',
      },
      {
        title: 'Chát'
      }]
    }
    ,
    {
      title: 'Nồng độ cafein trong hạt cà phê Arabica là bao nhiêu?',
      answers: [{
        title: '0.5 -> 1.5',
      },
      {
        title: '0.6 -> 1.5',
      },
      {
        title: '0.7 -> 1.4',
      },
      {
        title: '0.9 -> 1.4',
        isCorrect: true
      }]
    },
    {
      title: 'Hạt cà phê Arabica thích hợp trồng ở độ cao bao nhiêu?',
      answers: [{
        title: '>300m',
      },
      {
        title: '>400m',
      },
      {
        title: '>500m',
      },
      {
        title: '>600m',
        isCorrect: true
      }]
    }
  ];

  public glassQuestion: QuestionAnswer[] = [
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Rock',
        isCorrect: true
      },
      {
        title: 'Viva'
      },
      {
        title: 'Irish'
      },
      {
        title: 'Short'
      }],
      img: 'https://www.blasteventhire.co.uk/wp-content/uploads/2017/09/rocks_glasses.jpg'
    },
    {
      title: 'Tên loại ly này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Viva',
        isCorrect: true
      },
      {
        title: 'Irish'
      },
      {
        title: 'Short'
      }],
      img: 'https://www.ocean-glassware.com/wp-content/uploads/2018/09/1B16315-VIVA-Footed-1.jpg'
    }
  ];

  public toolQuestions: QuestionAnswer[] = [
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Bar spoo',
        isCorrect: true
      },
      {
        title: 'Bar whip'
      },
      {
        title: 'Bar blade'
      },
      {
        title: 'Ice tong'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSLt5fywzszTv1cSvhN9y90aXZ1KN-RGhclPflwB18lYvp7CSsB6qTOOl8w&usqp=CAc'
    },
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
    ,
    {
      title: 'Tên dụng cụ này là gì?',
      answers: [{
        title: 'Rock',
      },
      {
        title: 'Jigger',
        isCorrect: true
      },
      {
        title: 'Pourer'
      },
      {
        title: 'Ice scoop'
      }],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9cSIbuNJQs1HQ_aAVC7-NfbLWRYHzJgJg6A&usqp=CAU'
    }
  ];

  public questions: QuestionAnswer[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id === 'coffee') {
        this.questions = this.coffeeQuestions;
      }
      if (params.id === 'glass') {
        this.questions = this.glassQuestion;
      }
      if (params.id === 'tool') {
        this.questions = this.toolQuestions;
      }
    });
  }

}
