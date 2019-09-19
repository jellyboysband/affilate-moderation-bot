// import { releaseChecker } from './release-checker';
import logger from './logger';
// import { sleep } from './common';
// import Product, { IProduct } from '../models/Product';
// import User from '../models/User';
// import { telegram } from '../telegram';

/**
 * Takes all unreleased movies, checks each it it has been released and notifies users who observe this movie.
 */
export async function checkProductQueue(userId: string) {
  logger.debug(undefined, 'Starting to check product queue for the ' + userId);

  // условное получение продукта
  // const product = {
  //   title: 'title',
  //   rate: 5.3,
  //   price: 653.52,
  //   url: 'https://aliexpresss.com/id2145231451',
  //   image: 'https://aliexpresss.com/id2145231451.jpg',
  //   language: 'ru'
  // };

  // await Product.create
  // const user = await User.findOneAndUpdate(
  //   {
  //     _id:userId
  //   },
  //   {
  //     currentProduct: false
  //   },
  //   {
  //     new: true
  //   }
  // );
  // await notifyAndUpdateUsers(user);
}

// /**
//  * Find all users who observes a movie, notify them and remove movie from observables array
//  * @param movie - single movie
//  */
// async function notifyAndUpdateUsers(product: IProduct) {
//   const usersToNotify = await User.find({
//     observableMovies: product._id
//   });

//   for (const user of usersToNotify) {
//     logger.debug(undefined, 'Notifying user %s about movie %s', user.username, movie.title);
//     // TODO: move text to translations
//     const message =
//       user.language === 'en'
//         ? `🎉 Movie ${product.title} has been released!`
//         : `🎉 Фильм ${product.title} вышел и доступен на торрентах!`;

//     await sleep(0.5);

//     try {
//       await telegram.sendMessage(user._id, message);
//     } catch (e) {
//       logger.error(undefined, "Can't notify user about released movie, reason: %O", e);
//     } finally {
//       // TODO: check if user blocked the bot and delete him from the DB
//       await User.findOneAndUpdate(
//         {
//           _id: user._id
//         },
//         {
//           currentProduct: product._id,
//           $inc: { totalProducts: 1 }
//         },
//         {
//           new: true
//         }
//       );
//     }
//   }
// }
